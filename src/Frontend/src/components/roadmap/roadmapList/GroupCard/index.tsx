import Image from 'next/image';
import { useRouter } from 'next/router';
import type { Roadmap } from '@/api/type';
import Avatar from '@/components/common/Avatar';
import Flex from '@/components/common/Flex';
import * as Styled from '@/components/roadmap/roadmapList/GroupCard/style';
import DUEL_LINK from '@/constants/links';

interface GroupCardProps {
  roadmap: Roadmap;
}

const GroupCard = (props: GroupCardProps) => {
  const { roadmap } = props;
  const router = useRouter();

  return (
    <Styled.Root
      onClick={() => {
        router.push(DUEL_LINK.roadmapDetail(roadmap.id));
      }}>
      <Flex dir="col" gap={0.2}>
        <h3>{roadmap.name}</h3>
        <p>{roadmap.description}</p>
      </Flex>

      <section>
        <Flex align="center" justify="space-between">
          <span>{roadmap.stepNum}개 STEP</span>
          {roadmap.isManager && (
            <Styled.RoadmapEdit
              align="center"
              gap={0.3}
              onClick={(e) => {
                e.stopPropagation();
                router.push(DUEL_LINK.manageInfo(roadmap.id));
              }}>
              <span>관리</span>
              <Image src="/assets/icons/ic_setting.svg" width={17} height={17} alt="로드맵 관리" />
            </Styled.RoadmapEdit>
          )}
        </Flex>

        <section>
          <span>{roadmap.creator?.name}</span>
          <Avatar imageUrl={roadmap.creator?.image} imageSize={30} alt="프로필 이미지" />
        </section>
      </section>
    </Styled.Root>
  );
};

export default GroupCard;
