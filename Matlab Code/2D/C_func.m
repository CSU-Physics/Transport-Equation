function Cm = C_func(Nt,Dx,Dy,t,x,y,vx,vy,x0,y0)
% *** the mean concentration Cm ***
%%% Cm(x,t)= N(t) / (4*pi*Dx*t)^0.5 / (4*pi*Dy*t)^0.5 * exp(-(x-vx*t)^2)/(4*Dx*t)) * exp(-(y-vy*t)^2)/(4*Dy*t)) %%%%
% N(t): the number of the nuclei at time t,
% Dx, Dy: virtual coefficients of diffusion,
% t: time,
% x0,y0: the initial pollution release point:
% x, y: distance between pollution release and detection points,
% vx, vy: mean fluid velocities.

% calculation of the mean concentration for a given velocity and diameter
Cm = Nt / sqrt(4.0*pi*Dx*t) / sqrt(4.0*pi*Dy*t) * exp(-(x-x0-vx*t)^2/(4*Dx*t)) * exp(-(y-y0-vy*t)^2/(4*Dy*t));
end
