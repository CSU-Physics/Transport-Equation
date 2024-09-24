% 3d plots
function FigH = plot3d_C_txyz(x,y,z,t,tmax,Cxyz_ts,Ct_xyzs,Cmin,Cmax_xyz,Cmax_t,labels,leg1,flag,fig_title,fig_txt)

labels;
labels_Cxyz = [labels(1),labels(2),labels(3)];
labels_Ct = [labels(4),labels(5)];

FigH = figure;
FigH.Position = [100 100 1200 600];

tiledlayout(2,4)

% Top plot
plot3d_Cxyz(x,y,z,Cxyz_ts,Cmin,Cmax_xyz,labels_Cxyz,leg1,flag,fig_title,fig_txt)

% Bottom plot
nexttile(5,[1 4]);
plot3d_Ct(t,tmax,Ct_xyzs,Cmin,Cmax_t,labels_Ct,flag,fig_title,fig_txt)
end
