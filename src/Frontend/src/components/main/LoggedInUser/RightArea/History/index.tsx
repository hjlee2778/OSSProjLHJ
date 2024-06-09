import type { PropsWithChildren } from 'react';
import { forwardRef, useCallback } from 'react';
import { Calendar, type CalendarTooltipProps } from '@nivo/calendar';
import { useGetUserHistory, useGetUsers } from '@/api/hooks/user';
import CustomSuspense from '@/components/common/CustomSuspense';
import Responsive from '@/components/common/Responsive';
import Skeleton from '@/components/common/Skeleton';
import { useParamsToUrl } from '@/hooks/useParamsToUrl';
import * as Styled from './style';

interface HistoryProps {}

const History = forwardRef<HTMLDivElement, HistoryProps>((_, ref) => {
  const { addParamsToUrl } = useParamsToUrl();

  const { history, isLoading } = useGetUserHistory();

  const handleSelectDay = useCallback((color: string, date: string) => {
    if (color === '#eeeeee') return; // til을 작성하지 않은 날은 검색 불가능하도록 함
    addParamsToUrl({ date });
  }, []);

  const { user } = useGetUsers();

  return (
    <Styled.Root>
      <Responsive device="desktop">
        <Styled.HistoryTitle>
          <span>{user?.name}</span>
          <span>님의 학습 히스토리</span>
        </Styled.HistoryTitle>
      </Responsive>

      <Styled.Wrapper ref={ref}>
        <Styled.CalendarContainer>
          <CustomSuspense isLoading={isLoading} fallback={<Skeleton css={Styled.SkeletonStyles} />}>
            <Calendar
              data={history}
              width={970}
              height={200}
              from="2024-01-01"
              to="2024-12-31"
              emptyColor="#eeeeee"
              colors={['#EF4365']}
              margin={{ top: 20, right: 40, bottom: 10, left: 40 }}
              yearSpacing={45}
              yearLegendOffset={12}
              monthBorderColor="#ffffff"
              dayBorderWidth={2}
              dayBorderColor="#ffffff"
              tooltip={CustomTooltip}
              onClick={(data) => handleSelectDay(data.color, data.day)}
              legends={[
                {
                  anchor: 'bottom-right',
                  direction: 'row',
                  translateY: 36,
                  itemCount: 4,
                  itemWidth: 42,
                  itemHeight: 36,
                  itemsSpacing: 14,
                  itemDirection: 'right-to-left',
                },
              ]}
            />
          </CustomSuspense>
        </Styled.CalendarContainer>
      </Styled.Wrapper>
    </Styled.Root>
  );
});

export default History;

const CustomTooltip = ({ day }: CalendarTooltipProps) => {
  return <Tooltip>{day}</Tooltip>;
};

const Tooltip = ({ children }: PropsWithChildren) => {
  return (
    <Styled.TooltipContainer>
      <Styled.TooltipSharp />
      {children}
    </Styled.TooltipContainer>
  );
};
