function Nt = Nt_func(N0, lambda, t)
% *** Number of undecayed nuclei at time t; N(t) ***
%%% N(t) = N0 . exp(-lambda.t) %%%%
% N0: initial number of the nuclei at time t=0,
% lambda: the decay cosntant,
% t: time.

% calculation of Reynolds number for a given velocity and diameter
Nt = N0*exp(-lambda*t);
end
