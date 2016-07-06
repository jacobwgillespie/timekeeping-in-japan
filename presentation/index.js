// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Fill,
  Heading,
  Layout,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import OffsetClock from "../assets/OffsetClock";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  akashi: require("../assets/akashi.jpg"),
  bakuhan: require("../assets/bakuhan.jpg"),
  clock: require("../assets/clock.jpg"),
  daimyo: require("../assets/daimyo.jpg"),
  edo: require("../assets/edo.jpg"),
  era: require("../assets/era.jpg"),
  expansion: require("../assets/expansion.jpg"),
  jst: require("../assets/jst.jpg"),
  korea: require("../assets/korea.jpg"),
  meiji: require("../assets/meiji.jpg"),
  pm: require("../assets/pm.jpg"),
  sf: require("../assets/sf.jpg"),
  shogun: require("../assets/shogun.jpg"),
  showa: require("../assets/showa.jpg"),
  taisho: require("../assets/taisho.jpg"),
  taiwan: require("../assets/taiwan.jpg"),
  wwii: require("../assets/wwii.jpg"),
  wwii2: require("../assets/wwii-2.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "#37474F",
  text: "#ffffff"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["fade"]} transitionDuration={500}>
          <Slide bgImage={images.clock.replace("/", "")} bgDarken={0.75}>
            <Heading size={1} lineHeight={1} textColor="white">
              Timekeeping in
            </Heading>
            <Heading>Japan</Heading>
            <Text margin="2em" textColor="white">Jacob Gillespie</Text>
          </Slide>
          <Slide bgImage={images.era.replace("/", "")} bgDarken={0.75}>
            <Heading size={1} fit>
              年号
            </Heading>
            <Heading margin="1em 0 0 0">ねんごう / Nengō</Heading>
          </Slide>
          <Slide bgImage={images.edo.replace("/", "")} bgDarken={0.5}>
            <Heading fit>江戸</Heading>
            <Heading caps>Edo Period</Heading>
            <Heading>1608 - 1868</Heading>
          </Slide>
          <Slide bgImage={images.shogun.replace("/", "")} bgDarken={0.75} textColor="white">
            <Heading fit>将軍</Heading>
            <Heading caps>Shogun</Heading>
          </Slide>
          <Slide bgImage={images.daimyo.replace("/", "")} bgDarken={0.75} textColor="white">
            <Heading fit>大名</Heading>
            <Heading caps>Daimyo</Heading>
          </Slide>
          <Slide bgImage={images.bakuhan.replace("/", "")} bgDarken={0.75}>
            <Heading fit>幕藩</Heading>
            <Heading caps>Bakuhan</Heading>
          </Slide>
          <Slide bgImage={images.edo.replace("/", "")} bgDarken={0.5}>
            <Heading caps margin="0 0 1em 0">Regional Time</Heading>
            <Layout>
              <Fill>
                <OffsetClock randomSeconds offset={14 * 60 + 20} />
              </Fill>
              <Fill>
                <OffsetClock randomSeconds offset={14 * 60 + 40} />
              </Fill>
              <Fill>
                <OffsetClock randomSeconds offset={14 * 60 + 60} />
              </Fill>
            </Layout>
          </Slide>
          <Slide bgImage={images.meiji.replace("/", "")} bgDarken={0.75}>
            <Heading fit>明治</Heading>
            <Heading caps>Meiji Period</Heading>
            <Heading>1868 - 1912</Heading>
          </Slide>

          <Slide bgImage={images.akashi.replace("/", "")} bgDarken={0.75}>
            <Heading fit caps>Japan Standard Time</Heading>
            <Heading size={2} textColor="white" margin="0 0 1em 0">Akashi (1866)</Heading>
            <Layout>
              <Fill>
                <OffsetClock offset={14 * 60} />
              </Fill>
            </Layout>
          </Slide>

          <Slide bgImage={images.taiwan.replace("/", "")} bgDarken={0.75}>
            <Heading fit>南進論</Heading>
            <Heading caps>Nanshin-ron</Heading>
          </Slide>

          <Slide bgImage={images.taiwan.replace("/", "")} bgDarken={0.75}>
            <Heading fit caps>Western / Standard</Heading>
            <Heading size={2} textColor="white" margin="0 0 1em 0">Taiwan / 1895</Heading>
            <Layout>
              <Fill>
                <OffsetClock offset={13 * 60} />
              </Fill>
              <Fill>
                <OffsetClock offset={14 * 60} />
              </Fill>
            </Layout>
          </Slide>

          <Slide bgImage={images.korea.replace("/", "")} bgDarken={0.75}>
            <Heading fit caps>Korean Standard Time</Heading>
            <Heading size={2} textColor="white" margin="0 0 1em 0">1910</Heading>
            <Layout>
              <Fill>
                <OffsetClock offset={13 * 60} />
              </Fill>
              <Fill>
                <OffsetClock offset={13 * 60 + 30} />
              </Fill>
              <Fill>
                <OffsetClock offset={14 * 60} />
              </Fill>
            </Layout>
          </Slide>

          <Slide bgImage={images.korea.replace("/", "")} bgDarken={0.75}>
            <Heading fit caps>Central Standard Time</Heading>
            <Heading size={2} textColor="white" margin="0 0 1em 0">1912</Heading>
            <Layout>
              <Fill>
                <OffsetClock offset={13 * 60} />
              </Fill>
              <Fill>
                <OffsetClock offset={14 * 60} />
              </Fill>
            </Layout>
          </Slide>

          <Slide bgImage={images.taisho.replace("/", "")} bgDarken={0.75}>
            <Heading fit>大正</Heading>
            <Heading caps>Taishō Period</Heading>
            <Heading>1912 - 1926</Heading>
          </Slide>

          <Slide bgImage={images.showa.replace("/", "")} bgDarken={0.75}>
            <Heading fit>昭和</Heading>
            <Heading caps>Shōwa Period</Heading>
            <Heading>1926 - 1989</Heading>
          </Slide>

          <Slide bgImage={images.expansion.replace("/", "")} bgDarken={0.75}>
            <Heading fit caps>Japanese Standard Time</Heading>
            <Heading size={2} textColor="white" margin="0 0 1em 0">1937</Heading>
            <Layout>
              <Fill>
                <OffsetClock offset={14 * 60} />
              </Fill>
            </Layout>
          </Slide>

          <Slide bgImage={images.wwii.replace("/", "")} bgDarken={0.55}>
            <Heading fit>WWII</Heading>
            <Heading caps>Defeat and Occupation</Heading>
          </Slide>

          <Slide bgImage={images.wwii2.replace("/", "")} bgDarken={0.75}>
            <Heading fit caps>Daylight Saving Time</Heading>
            <Heading size={2} textColor="white" margin="0 0 1em 0">1948 - 1951</Heading>
            <Layout>
              <Fill>
                <OffsetClock offset={14 * 60 + 60} />
              </Fill>
              <Fill>
                <OffsetClock offset={14 * 60} />
              </Fill>
            </Layout>
          </Slide>

          <Slide bgImage={images.sf.replace("/", "")} bgDarken={0.75}>
            <Heading fit>Sovereignty</Heading>
            <Heading caps>SF Peace Treaty</Heading>
            <Heading>1951</Heading>
          </Slide>

          <Slide bgImage={images.jst.replace("/", "")} bgDarken={0.75}>
            <Heading fit caps>Japan Standard Time</Heading>
            <Heading size={2} textColor="white" margin="0 0 1em 0">UTC+9</Heading>
            <Layout>
              <Fill>
                <OffsetClock offset={14 * 60} />
              </Fill>
            </Layout>
          </Slide>

          <Slide bgImage={images.pm.replace("/", "")} bgDarken={0.75}>
            <Heading fit margin="0 0 1em 0">Daylight Saving Time?</Heading>
            <Heading size={2} textColor="white">PM Shinzo Abe</Heading>
          </Slide>

          <Slide bgColor="tertiary">
            <Heading size={1} caps textColor="primary">
              Sources
            </Heading>
            <p>
              J.McKinstry and H. Kerbo, Japanese Society and History. 2013. [audiobook]
            </p>
            <p>
              United States Naval Observatory. Publications of the United States Naval Observatory. 1906
            </p>
            <p>
              Hongo, Jun. The Japan Times. Daylight saving: Is it finally time to convert?. 2011. [online]
            </p>
            <p>
              Japanese Government. 明治十九年勅令第五十一号. Ordinance 51. 1886
            </p>
            <p>
              Japanese Government. 明治二十八年勅令第百六十七號標準時ニ關スル件中改正ノ件
              Ordinance 167. 1937.
            </p>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
