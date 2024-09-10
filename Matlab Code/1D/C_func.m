function Cm = Cm_func(Nt,Dx,t,x,vx)
% *** the mean concentration Cm ***
%%% Cm(x,t)= N(t) / (4*pi*Dx*t)^0.5 * exp(- (x - vx*t)^2) / (4*Dx*t) ) %%%%
% N(t): the number of the nuclei at time t,
% Dx: virtual coefficient of diffusion,
% t: time,
% x: distance between neutron source and gamma detector,
% vx: mean fluid velocity.

% calculation of the mean concentration for a given velocity and diameter
Cm = Nt / sqrt(4.0*pi*Dx*t) * exp(-(x-vx*t)^2/(4*Dx*t));;
end
