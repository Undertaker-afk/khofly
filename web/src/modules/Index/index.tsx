import { Container, Flex, Text, Title } from "@mantine/core";
import SearchBar from "./components/SearchBar";

import classes from "./styles.module.scss";
import { useTranslate } from "@hooks/translate/use-translate";
import Shortcuts from "./components/Shortcuts";
import { useShortcutsStore } from "@store/shortcuts";
import DevInterface from "./components/DevInterface";
import useSettingsParams from "./hooks/use-set-params";

const PageIndex = () => {
  const t = useTranslate();

  const displayShortcuts = useShortcutsStore((state) => state.displayShortcuts);

  // Change settings from params
  useSettingsParams();

  return (
    <Container
      className={classes.index_page}
      size="lg"
      // pb={80 + 70 + 70}
      // p="xl"
      // pb={170}
      // pt={240}
    >
      {/* <Center className={classes.center}> */}
      <Flex className={classes.flex} align="center" direction="column">
        <Title className={classes.app_name} mb="sm">
          {process.env.IS_SELF_HOST === "0" ? t("_common.app_name") : process.env.APP_NAME}
        </Title>

        <SearchBar />

        {displayShortcuts && <Shortcuts />}
      </Flex>
      {/* </Center> */}

      <DevInterface />
    </Container>
  );
};

export default PageIndex;
