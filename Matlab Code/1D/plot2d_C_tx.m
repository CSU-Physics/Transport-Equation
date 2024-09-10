% 2d plots
function FigH = plot2d_C_tx(x,t,tmax,Cx_ts,Ct_xs,Cmin,Cmax_x,Cmax_t,labels,leg1,flag,fig_title,fig_txt)

labels;
labels_Cx = [labels(1),labels(3)];
labels_Ct = [labels(2),labels(3)];

FigH = figure;

tiledlayout(2,1)

% Top plot
nexttile
%plot(x,Cx_ts,'LineWidth',2)%
plot2d_Cx(x,Cx_ts,Cmin,Cmax_x,labels_Cx,leg1,flag,fig_title,fig_txt)

% Bottom plot
nexttile
plot2d_Ct(t,tmax,Ct_xs,Cmin,Cmax_t,labels_Ct,flag,fig_title,fig_txt)
end


