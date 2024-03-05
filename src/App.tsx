import {
  IconButton,
  LinkButton,
  ToggleButton,
  IconText,
  SmallText,
  BoxWrapper,
  ContentWrapper,
  GridWrapper,
  MainWrapper,
  LargeText,
} from "./components/";
import { skills, portfolios, social, works } from "./constant";

const App = () => {
  return (
    <MainWrapper>
      {/* Greeting */}
      <ToggleButton />

      {/* Skills */}
      <ContentWrapper>
        <LargeText text="SKILLS" />
        <BoxWrapper>
          <GridWrapper style="grid-cols-2 md:grid-cols-4">
            {skills.map((skill) => (
              <IconText key={skill.name} text={skill.name} icon={skill.icon} />
            ))}
          </GridWrapper>
        </BoxWrapper>
      </ContentWrapper>

      {/* Experience */}
      <ContentWrapper>
        <LargeText text="EXPERIENCE" />
        <BoxWrapper>
          {works.map((work) => (
            <GridWrapper
              key={work.position}
              style="w-full grid-cols-2 place-content-between"
            >
              <SmallText text={work.position} />
              <SmallText text={work.dateStar} style="text-right" />
              <SmallText text={work.place} />
              <SmallText text={work.dateEnd} style="text-right" />
            </GridWrapper>
          ))}
        </BoxWrapper>
      </ContentWrapper>

      {/* Portfolio */}
      <ContentWrapper>
        <LargeText text="PORTFOLIOS" />
        <GridWrapper style="grid-cols-1 md:grid-cols-3 items-stretch w-full gap-12 ">
          {portfolios.map((portfolio) => (
            <BoxWrapper>
              <SmallText text={portfolio.title} />
              <SmallText text={portfolio.description} />

              <GridWrapper style="grid-cols-3 gap-5 my-4">
                <LinkButton text="LIVE" link="" />
                <LinkButton text="FE" link="" />
                <LinkButton text="BE" link="" />
              </GridWrapper>

              <GridWrapper style="grid-cols-8 gap-5 my-4">
                {portfolio.tags.map((tag) => (
                  <div key={tag.key} className="text-xl">
                    {tag}
                  </div>
                ))}
              </GridWrapper>
            </BoxWrapper>
          ))}
        </GridWrapper>
      </ContentWrapper>

      {/* Footer */}
      <ContentWrapper>
        <LargeText text="STAY CONNECTED" />
        <GridWrapper style="grid-cols-1 md:grid-cols-3 gap-12 w-fit mx-auto place-content-center">
          {social.map((s) => (
            <IconButton key={s.id} text={s.title} icon={s.icon} link={s.link} />
          ))}
        </GridWrapper>
      </ContentWrapper>
    </MainWrapper>
  );
};

export default App;
