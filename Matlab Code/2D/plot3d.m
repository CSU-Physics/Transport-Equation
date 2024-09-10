% 3d plots
function FigH = plot3d(x,y,z,xlab,ylab,zlab,xmin,ymin,zmin,xmax,ymax,zmax,flag,name,fig_text)
FigH = figure;
surf(x,y,z);
col = jet(1000);
tmp = linspace(0,1,1000)';
for n = 1:3,
col(:,n) = interp1( 10.^tmp, col(:,n), 2+8*tmp, 'PCHIP');
end
colormap(col)

tt=(xmax-xmin)/4;
XTicks=xmin:tt:xmax;

tt=(ymax-ymin)/4;
YTicks=ymin:tt:ymax;

ex = 10^(-floor(log10(zmax)));
acc = 0.5;
zmax = ceil(zmax* ex/acc)*acc/ ex;
tt=(zmax-zmin)/4;
ZTicks=zmin:tt:zmax;

axis square
axis([xmin,xmax,ymin,ymax,zmin,zmax])

if strcmp(flag,'log')
ZlogTicks=0:1:6;
LogTicks=10.^ZlogTicks;
ZTicks=LogTicks(LogTicks>=zmin & LogTicks<=zmax);
set(gca,'ZScale','log');
end

set(gca, ...
    'Box'         , 'off'                        , ...
    'LooseInset'  , get(gca, 'TightInset') * 4.5 , ...
    'TickDir'     , 'in'                         , ...
    'XMinorTick'  , 'on'                        , ...
    'YMinorTick'  , 'on'                        , ...
    'ZMinorTick'  , 'on'                        , ...
    'TickLength'  , [.03 .03]                   , ...
    'LineWidth'   , 0.5                         , ...
    'XGrid'       , 'on'                        , ...
    'YGrid'       , 'on'                        , ...
    'ZGrid'       , 'on'                        , ...
    'XTick'       , XTicks                     , ...
    'YTick'       , YTicks                     , ...
    'ZTick'       , ZTicks                      , ...
    'Units'       , 'normalized'                , ...
    'Position'    , [0.15 0.2 0.75 0.7]         , ...     % in order to make matlab to do not "cut" latex-interpreted axes labels
    'FontSize'    , 18                           );

xlabel([num2str(xlab)],'Interpreter','LaTex','FontSize',25)
ylabel([num2str(ylab)],'Interpreter','LaTex','FontSize',25)
zlabel([num2str(zlab)],'Interpreter','LaTex','FontSize',25)
if (fig_text ~= "")
text(0,ymax/3,zmax,[num2str(fig_text)],'Interpreter','LaTex','FontSize',20)
end

grid on
set(gca, 'zminorgrid', 'off')
view(-45, 22);
print(num2str(name),'-djpeg','-noui')
print(num2str(name),'-depsc2','-noui')
end
