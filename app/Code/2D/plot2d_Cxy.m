% 2d plots
function FigX = plot2d_Cx(x,y,C_xy,C_xy_min,C_xy_max,labels,leg1,flag,fig_title,fig_txt)
xlab = labels(1);
ylab = labels(2);

txt1 = fig_txt(1);
txt2 = fig_txt(2);
txt3 = fig_txt(3);
txt1_x = str2num(fig_txt(4));
txt2_x = str2num(fig_txt(5));
txt3_x = str2num(fig_txt(6));
txt1_y = str2num(fig_txt(7));
txt2_y = str2num(fig_txt(8));
txt3_y = str2num(fig_txt(9));

%FigX = figure;
contourf(x,y,C_xy,100, 'LineStyle', 'none'); % shading flat;
title([num2str(fig_title)],'Interpreter','LaTex','FontSize',18)
%legend boxoff 
%title([num2str(fig_title)],'Interpreter','LaTex','FontSize',18)
caxis([C_xy_min,C_xy_max]);
colormap(jet);
colorbar

xmin = 0; %min(x)
xmax = max(x);
tt=(xmax-xmin)/5;
XTicks=xmin:tt:xmax;

ymin = 0; %min(y)
ymax = max(y);
tt=(ymax-ymin)/5;
YTicks=ymin:tt:ymax;


ex = 10^(-floor(log10(C_xy_max)));
acc = 0.5;
C_xy_max = ceil(C_xy_max* ex/acc)*acc/ ex;


%axis square
axis([xmin,xmax,ymin,ymax]);

set(gca, ...
    'Box'         , 'off'                        , ...
    'LooseInset'  , get(gca, 'TightInset') * 4.5 , ...
    'TickDir'     , 'in'                         , ...
    'XMinorTick'  , 'on'                        , ...
    'YMinorTick'  , 'on'                        , ...
    'TickLength'  , [.03 .03]                   , ...
    'LineWidth'   , 0.5                         , ...
    'XGrid'       , 'on'                        , ...
    'YGrid'       , 'on'                        , ...
    'XTick'       , XTicks                     , ...
    'YTick'       , YTicks                     , ...
    'Units'       , 'normalized'                , ...
    'Position'    , [0.15 0.2 0.75 0.7]         , ...     % in order to make matlab to do not "cut" latex-interpreted axes labels
    'FontSize'    , 18                           );

xlabel([num2str(xlab)],'Interpreter','LaTex','FontSize',25)
ylabel([num2str(ylab)],'Interpreter','LaTex','FontSize',25)
if (fig_txt ~= "")
    text(txt1_x,txt1_y,[num2str(txt1)],'Interpreter','LaTex','FontSize',20,'Color','r')
    text(txt2_x,txt2_y,[num2str(txt2)],'Interpreter','LaTex','FontSize',20,'Color','r')
    text(txt3_x,txt3_y,[num2str(txt3)],'Interpreter','LaTex','FontSize',20,'Color','r')
end

%print(num2str(name),'-djpeg','-noui')
%print(num2str(name),'-depsc2','-noui')
end


