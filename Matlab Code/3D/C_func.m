function Cm = C_func(Nt,Dx,Dy,Dz,t,x,y,z,vx,vy,vz,x0,y0,z0)
% *** the mean concentration Cm ***
%%% Cm(x,y,z,t)= N(t) / (4*pi*Dx*t)^0.5 / (4*pi*Dy*t)^0.5 / (4*pi*Dz*t)^0.5 ...
%%% ... * exp(-(x-vx*t)^2)/(4*Dx*t)) * exp(-(y-vy*t)^2)/(4*Dy*t)) * exp(-(z-vz*t)^2)/(4*Dz*t)) %%%%
% N(t): the number of the nuclei at time t,
% Dx, Dy, Dz: virtual coefficients of diffusion,
% t: time,
% x0,y0,z0: the initial pollution release point:
% x, y, z: distance between pollution release and detection points,
% vx, vy, vz: mean fluid velocities.

% calculation of the mean concentration for a given velocity and diameter
exp_x = exp(-(x-x0-vx*t)^2/(4*Dx*t));
exp_y = exp(-(y-y0-vy*t)^2/(4*Dy*t));
exp_z = exp(-(z-z0-vz*t)^2/(4*Dz*t));

sqrt_x = sqrt(4.0*pi*Dx*t);
sqrt_y = sqrt(4.0*pi*Dy*t);
sqrt_z = sqrt(4.0*pi*Dz*t);

Cm = Nt / sqrt_x / sqrt_y / sqrt_z * exp_x * exp_y * exp_z;
end
