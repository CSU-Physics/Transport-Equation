% 2d plots
function Fig_t = plot2d_Ct(t,tmax,C_t,C_t_min,C_t_max,labels,flag,fig_title,fig_txt)
tlab = labels(1);
Clab = labels(2);

txt1 = fig_txt(1);
txt2 = fig_txt(2);

txt1_x = fig_txt(3);
txt2_x = fig_txt(4);

legend1 = [num2str(txt1) '(' num2str(txt1_x) ')'];
legend2 = [num2str(txt2) '(' num2str(txt2_x) ')'];


txt1_loc = str2num(fig_txt(3));
txt2_loc = str2num(fig_txt(4));

Nt = length(t);

%Fig_t = figure;
plot(t,C_t(1,:),t,C_t(2,:),'LineWidth',2);
legend(legend1,legend2,'Interpreter','LaTex','FontSize',18);

%%title('Pollution concentration at A \& B','Interpreter','LaTex','FontSize',18);

tmin = 0; %min(t)
%tmax = max(t);
tt=(tmax-tmin)/5;
XTicks=tmin:tt:tmax;

ex = 10^(-floor(log10(C_t_max)));
acc = 0.5;
C_t_max = ceil(C_t_max* ex/acc)*acc/ ex;

tt=(C_t_max-C_t_min)/4;
YTicks=C_t_min:tt:C_t_max;

if strcmp(flag,'log')
    C_t_min = 1e-6;
    ylogTicks=0:1:6;
    LogTicks=10.^ylogTicks;
    yTicks=LogTicks(LogTicks>=C_t_min & LogTicks<=C_t_max);
    set(gca,'yScale','log');
end

%axis square
axis([tmin,tmax,C_t_min,C_t_max])

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

xlabel([num2str(tlab)],'Interpreter','LaTex','FontSize',25)
ylabel([num2str(Clab)],'Interpreter','LaTex','FontSize',25)

end
