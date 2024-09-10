% This program calculated the concentration of radioactive pollution ...
% for an instantaneous release in a 1D water canal flowing at ...
% a constant speed.
% M.R. Hadizadeh (mhadizadeh@centralstate.edu)
% Oct. 2022
%
clc;
clear all;
close all;

% the average water speed in canal 1km/h ~ 0.278 m/s
vx = 0.3; %m/s

%  diffusion coefficient Dx: m^2/s
Dx = 0.001;

% the half-life T1/2 & radiactive decay constant lambda for 16N
% T1/2 = ln(2) / lambda 
% Recommended value:	7.13 +/- 0.02 sec
% Ref: https://nucldata.tunl.duke.edu/nucldata/HTML/A=16/16_05_1993.pdf
%
% 16O+n→ 16N+p
% 16N is of interest in nuclear power operations because it is a gamma emitter with a short half-life (about 7.13 seconds). 
% The gamma radiation it emits can be a significant source of radiation dose to personnel if the reactor coolant is not 
% properly shielded, especially during reactor start-up and shutdown procedures when neutron flux levels can change. 
% Monitoring 16N levels can also provide insight into reactor conditions.
T1_2 = 7.13; % sec
lambda = log(2) / T1_2; % s^-1 

% initial number of neutron particles N0
% The unit of concentration is rescaled with a factor of billion.
N0 = 1.0; %1e9;

% calculation of concentration for selected pollution travel times
% distance x between the pollution release point and location x along the length of the 1D canal
Nx = 201;
xmin = 0.0;
xmax = 3.0; % m
Delx = (xmax - xmin)/(Nx-1);
for i=1:Nx
    x(i)= xmin + Delx * (i-1);
end

% selected polution travel times t
Nts = 19;
tsmin = 0.50;
tsmax = 10.0; % s
Delt = (tsmax - tsmin)/Nts;
for i=1:Nts
    ts(i)= tsmin + Delt * i;
end

% calculation of the mean concentration Cm(x,t)
for i=1:Nx
    xm=x(i);
    for j=1:Nts
        tm=ts(j);
        N(j) = Nt_func(N0, lambda, tm);
        Cm_x_ts(i,j) = C_func(N(j),Dx,tm,xm,vx);
    end
end

Cmin = 0;
Cmax_x = max(Cm_x_ts,[],'all');

% calculation of concentration for selected locations in the domain of
% selected times
% distance x between the pollution release point and location x along the length of the 1D canal
Nxs = 2;
xs(1) = 1.0; %m
xs(2) = 2.0; % m

Nt = 201;
% calculation of the mean concentration Cm(x,t)
for i=1:Nxs % xs
    xm=xs(i);
    for j=1:Nts % ts
% polution time travel t
        tmin = 1.E-10;
        tmax = ts(j); % ts
        Delt = (tmax - tmin)/Nt;        
        for k=1:Nt % t
            t_cut_ts(j,k) = tmin + Delt * (k-1);
            tm = t_cut_ts(j,k);
            N(k) = Nt_func(N0, lambda, tm);
            Cm_t_xs(i,j,k) = C_func(N(k),Dx,tm,xm,vx);
        end
    end
end

Cmax_t = max(Cm_t_xs,[],'all');

for its = 1:Nts %ts
    figure(its)
    flag = 'lin';
    labels = ["$x \,(m)$","$t \,(s)$","$C(x,t) \,(Gm^{-1})$"];
    legends=strcat("$t=$",strtrim(cellstr(num2str(ts(its)')))," (s)");
    fig_title = ['$v_x = \, $' num2str(vx) '$\,m/s$'];
    fig_txt = ["A", "B",xs(1),xs(2)];
    Cval_x = Cm_x_ts(:,its);
    Cval_t = Cm_t_xs(1:Nxs,its,1:Nt);  
    time = t_cut_ts(its,:);
    plot2d_C_tx(x,time,tsmax,Cval_x,Cval_t,Cmin,Cmax_x,Cmax_t,labels,legends,flag,fig_title,fig_txt);
end

figure(100)
DelayTime = 1;
filename = 'C_x_t.gif';
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
vid = VideoWriter('C_x_t_fast.avi','Uncompressed AVI');
open(vid);

for n = 1:Nts
    h = figure(n);
    frame = getframe(h);
   writeVideo(vid,frame);
end
close(vid);

% decrease avi video framerate 
% load the video.
obj = VideoReader('C_x_t_fast.avi');
% Write in new variable
obj2= VideoWriter('C_x_t.avi');
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

