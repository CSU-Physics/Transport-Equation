% This program calculated the concentration of radioactive pollution ...
% for an instantaneous release in a 3D water stream flowing at ...
% a constant speed v_x, vy, and vz.
% M.R. Hadizadeh (mhadizadeh@centralstate.edu)
% August 2023
%
close all, clear, clc;

% the average water speed in 3D stream: 1km/h ~ 0.278 m/s
vx = 0.3; %m/s
vy = 0.20; %0.3; %m/s
vz = 0.10; %0.3; %m/s
x0 = .0;
y0 = .0;
z0 = 0.0;

%  diffusion coefficients Dx, Dy, and Dz
Dx = 0.001;
Dy = 0.01;
Dz = 0.01;

% the half-life T1/2 & radiactive decay constant lambda for 16N
% T1/2 = ln(2) / lambda 
% Recommended value:	7.13 +/- 0.02 sec
% Ref: https://nucldata.tunl.duke.edu/nucldata/HTML/A=16/16_05_1993.pdf
T1_2 = 7.13; % sec
lambda = log(2) / T1_2; % s^-1 

% initial number of neutron particles N0
% The unit of concentration is rescaled with a factor of billion.
N0 = 1.0; %1e9;

% calculation of concentration for selected pollution travel times
% distance x between the pollution release point and location x along the length of the 1D canal
Nx = 101;
Ny = 91;
Nz = 61;

xmin = 0.0;
xmax = 3.0; % m

ymin = 0.0;
ymax = 2.0; % m

zmin = 0.0;
zmax = 1.0; % m

Delx = (xmax - xmin)/(Nx-1);
Dely = (ymax - ymin)/(Ny-1);
Delz = (zmax - zmin)/(Nz-1);

for i=1:Nx
    x(i)= xmin + Delx * (i-1);
end
for i=1:Ny
    y(i)= ymin + Dely * (i-1);
end
for i=1:Nz
    z(i)= zmin + Delz * (i-1);
end

% selected polution travel times t
Nts = 30;
tsmin = 0.0;
tsmax = 6.0; % s
Delt = (tsmax - tsmin)/Nts;
for i=1:Nts
    ts(i)= tsmin + Delt * i;
end

% calculation of the mean concentration C(x,y,t)
for i=1:Nx % x
    xm=x(i);
    for j=1:Ny % y
        ym=y(j);
        for k=1:Nz % z
            zm=z(k);        
            for l=1:Nts % t
                tm=ts(l);
                N = Nt_func(N0, lambda, tm);
                C_xyz_ts(i,j,k,l) = C_func(N,Dx,Dy,Dz,tm,xm,ym,zm,vx,vy,vz,x0,y0,z0);
            end
        end
    end
end

Cmin = 0;
Cmax_xyz = max(C_xyz_ts,[],'all');

% calculation of concentration for selected locations in the domain of selected times
% x,y,z: distance between the pollution release point and the detection location
Nxyzs = 3;
xs(1) = 0.50; %m
ys(1) = 0.50; %m
zs(1) = 0.0; %m
xs(2) = 1.0; % m
ys(2) = 0.20; % m
zs(2) = 0.0; % m
xs(3) = 1.0; % m
ys(3) = 0.70; % m
zs(3) = 0.0; % m

Nt = 201;
% calculation of the mean concentration Cm(x,t)
for i=1:Nxyzs % xs
    xm=xs(i);
    for j=1:Nxyzs % ys
        ym=ys(j);
        for k=1:Nxyzs % zs
            zm=zs(k);
            for l=1:Nts % ts
% polution time travel t
                tmin = 1.E-10;
                tmax = ts(l); % ts
                Delt = (tmax - tmin)/Nt;        
                for m=1:Nt % t
                    tm = tmin + Delt * (m-1);
                    t_cut_ts(l,m) = tm;
                    N = Nt_func(N0, lambda, tm);
                    C_t_xyzs(i,j,k,l,m) = C_func(N,Dx,Dy,Dz,tm,xm,ym,zm,vx,vy,vz,x0,y0,z0);
                end
            end
        end
    end
end

Cmax_t = max(C_t_xyzs,[],'all');

for its = 1:Nts %ts
    figure(its)
    flag = 'lin';
    labels = ["$x \,(m)$","$y \,(m)$","$z \,(m)$","$t \,(s)$","$C(x,y,z,t) \,(Gm^{-1})$"];
    legends=strcat("$t=$",strtrim(cellstr(num2str(ts(its)')))," (s)");
    fig_title = ['$v_x = \, $' num2str(vx) '$\,m/s$, $v_y = \, $' num2str(vy) '$\,m/s$ , $v_z = \, $' num2str(vz) '$\,m/s$, $t = \, $' num2str(ts(its)) '$\,s$ '];
    fig_txt = ["A","B","C",xs(1),xs(2),xs(3),ys(1),ys(2),ys(3),zs(1),zs(2),zs(3)];
    Cval_xyz(1:Nx,1:Ny,1:Nz) = C_xyz_ts(1:Nx,1:Ny,1:Nz,its);
    Cval_t = C_t_xyzs(1:Nxyzs,1:Nxyzs,1:Nxyzs,its,1:Nt);
    time = t_cut_ts(its,:);
    plot3d_C_txyz(x,y,z,time,tsmax,Cval_xyz,Cval_t,Cmin,Cmax_xyz,Cmax_t,labels,legends,flag,fig_title,fig_txt);
end

figure(100)
DelayTime = 1;
filename = 'C_xyz_t.gif';
for n = 1:Nts
    h = figure(n);
    frame = getframe(h);
    im = frame2im(frame);
    [imind,cm] = rgb2ind(im,256);
    if n == 1;
       imwrite(imind,cm,filename,'gif','DelayTime',DelayTime, 'Loopcount',inf);
    else
       imwrite(imind,cm,filename,'gif','DelayTime',DelayTime,'WriteMode','append');
    end
end

figure(101);
vid.FrameRate = 1;
vid = VideoWriter('C_xyz_t_fast.avi','Uncompressed AVI');
open(vid);

for n = 2:Nts
    h = figure(n);
    frame = getframe(h);
   writeVideo(vid,frame);
end
close(vid);

% decrease avi video framerate 
% load the video.
obj = VideoReader('C_xyz_t_fast.avi');
% Write in new variable
obj2= VideoWriter('C_xyz_t.avi');
% decrease framerate 
obj2.FrameRate = 2;              
open(obj2);
% for reading frames one by one
while hasFrame(obj)              
    k = readFrame(obj); 
    % write the frames in obj2.         
    obj2.writeVideo(k);          
end
close(obj2);

