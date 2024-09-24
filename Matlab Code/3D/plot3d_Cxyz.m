% 2d plots
function FigX = plot3d_Cxyz(x,y,z,C_xyz,C_xyz_min,C_xyz_max,labels,leg1,flag,fig_title,fig_txt)

colorbar_uniform = 0; % 1: uniform colorbar for all plots; 0: non=uniform colorbar

xlab = labels(2);
ylab = labels(1);
zlab = labels(3);

txt1 = fig_txt(1);
txt2 = fig_txt(2);
txt3 = fig_txt(3);
txt1_x = str2num(fig_txt(4));
txt2_x = str2num(fig_txt(5));
txt3_x = str2num(fig_txt(6));
txt1_y = str2num(fig_txt(7));
txt2_y = str2num(fig_txt(8));
txt3_y = str2num(fig_txt(9));
txt1_z = str2num(fig_txt(10));
txt2_z = str2num(fig_txt(11));
txt3_z = str2num(fig_txt(12));

% plot x slices of data
nexttile
xslice = [0 1 2 3];
yslice = [];
zslice = [];
slice(y, x, z, C_xyz, yslice, xslice, zslice)
shading interp
xlabel([num2str(xlab)],'Interpreter','LaTex','FontSize',14)
ylabel([num2str(ylab)],'Interpreter','LaTex','FontSize',14)
zlabel([num2str(zlab)],'Interpreter','LaTex','FontSize',14)
alpha(0.5) % transparency level
colormap(jet);
%%colorbar;
if (colorbar_uniform == 1)
  caxis([C_xyz_min,C_xyz_max]); % all time-dependent plots with a uniform colarbar
end

% plot y slices of data
nexttile
xslice = [];
yslice = [0 1 2];
zslice = [];
slice(y, x, z, C_xyz, yslice, xslice, zslice)
shading interp
xlabel([num2str(xlab)],'Interpreter','LaTex','FontSize',14)
ylabel([num2str(ylab)],'Interpreter','LaTex','FontSize',14)
zlabel([num2str(zlab)],'Interpreter','LaTex','FontSize',14)
alpha(0.5) % transparency level
colormap(jet);
%%colorbar;
if (colorbar_uniform == 1)
  caxis([C_xyz_min,C_xyz_max]); % all time-dependent plots with a uniform colarbar
end

% plot z slices of data
nexttile
xslice = [];
yslice = [];
zslice = [0 0.5 1];
slice(y, x, z, C_xyz, yslice, xslice, zslice)
shading interp
xlabel([num2str(xlab)],'Interpreter','LaTex','FontSize',14)
ylabel([num2str(ylab)],'Interpreter','LaTex','FontSize',14)
zlabel([num2str(zlab)],'Interpreter','LaTex','FontSize',14)
alpha(0.5) % transparency level
colormap(jet);
%%colorbar;
if (colorbar_uniform == 1)
  caxis([C_xyz_min,C_xyz_max]); % all time-dependent plots with a uniform colarbar
end

% plot x-y-z slices of data
nexttile
xslice = [0:0.1:3];
yslice = [0:0.1:2];
zslice = [0:0.1:1];
slice(y, x, z, C_xyz, yslice, xslice, zslice)
shading interp
xlabel([num2str(xlab)],'Interpreter','LaTex','FontSize',14)
ylabel([num2str(ylab)],'Interpreter','LaTex','FontSize',14)
zlabel([num2str(zlab)],'Interpreter','LaTex','FontSize',14)
alpha color
%%alpha scaled
%alpha(0.5) % transparency level
colormap(jet);
colorbar;
if (colorbar_uniform == 1)
  caxis([C_xyz_min,C_xyz_max]); % all time-dependent plots with a uniform colarbar
end

% title over all subplots
sgtitle([num2str(fig_title)],'Interpreter','LaTex','FontSize',18)

%print(num2str(name),'-djpeg','-noui')
%print(num2str(name),'-depsc2','-noui')
end
