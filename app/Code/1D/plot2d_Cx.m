% 2d plots
function FigX = plot2d_Cx(x,C_x,C_x_min,C_x_max,labels,leg1,flag,fig_title,fig_txt)
xlab = labels(1);
ylab = labels(2);

txt1 = fig_txt(1);
txt2 = fig_txt(2);
txt1_loc = str2num(fig_txt(3));
txt2_loc = str2num(fig_txt(4));

%FigX = figure;
plot(x,C_x,'LineWidth',2)
legend([num2str(leg1)],'Interpreter','LaTex','FontSize',18)
legend boxoff 
title([num2str(fig_title)],'Interpreter','LaTex','FontSize',18)


xmin = 0; %min(x)
xmax = max(x);
tt=(xmax-xmin)/5;
XTicks=xmin:tt:xmax;


ex = 10^(-floor(log10(C_x_max)));
acc = 0.5;
C_x_max = ceil(C_x_max* ex/acc)*acc/ ex;

tt=(C_x_max-C_x_min)/4;
YTicks=C_x_min:tt:C_x_max;

if strcmp(flag,'log')
    C_x_min = 1e-6;
    ylogTicks=0:1:6;
    LogTicks=10.^ylogTicks;
    yTicks=LogTicks(LogTicks>=C_x_min & LogTicks<=C_x_max);
    set(gca,'yScale','log');
end

%axis square
axis([xmin,xmax,C_x_min,C_x_max]);

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
    text(txt1_loc,C_x_max/2,[num2str(txt1)],'Interpreter','LaTex','FontSize',20,'Color','r')
    text(txt2_loc,C_x_max/2,[num2str(txt2)],'Interpreter','LaTex','FontSize',20,'Color','r')
end

%print(num2str(name),'-djpeg','-noui')
%print(num2str(name),'-depsc2','-noui')
end


