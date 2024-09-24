% 2d plots
function FigH = plot2d_C_txy(x,y,t,tmax,Cxy_ts,Ct_xys,Cmin,Cmax_xy,Cmax_t,labels,leg1,flag,fig_title,fig_txt)

labels;
labels_Cxy = [labels(1),labels(2)];
labels_Ct = [labels(3),labels(4)];

FigH = figure;

tiledlayout(2,1)

% Top plot
nexttile
plot2d_Cxy(x,y,Cxy_ts,Cmin,Cmax_xy,labels_Cxy,leg1,flag,fig_title,fig_txt)

% Bottom plot
nexttile
plot2d_Ct(t,tmax,Ct_xys,Cmin,Cmax_t,labels_Ct,flag,fig_title,fig_txt)
end
