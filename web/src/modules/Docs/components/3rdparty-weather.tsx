import { Blockquote, Container, useMantineTheme } from "@mantine/core";
import DocsTitle from "./common/DocsTitle";
import { IconCloud, IconHaze } from "@tabler/icons-react";
import { getIconStyle } from "@utils/functions/iconStyle";
import DocsText from "./common/DocsText";
import DocsLink from "./common/DocsLink";

const Docs3rdPartyWeather = () => {
  const theme = useMantineTheme();

  return (
    <Container size="lg" p="xl" pb={100}>
      <DocsTitle
        leftSection={<IconHaze style={getIconStyle(48)} color={theme.colors.orange[5]} />}
      >
        Current weather data
      </DocsTitle>

      <Blockquote color="yellow" mt="xl" radius="sm">
        This applies only if you want to self-host Khofly API.
      </Blockquote>

      <DocsText>
        OpenWeatherMap One Call API is used to fetch data server side. One Call API
        requires an API key to be used so if you want to self host the Khofly API you'll
        need to go to{" "}
        <DocsLink
          href="https://home.openweathermap.org/subscriptions/unauth_subscribe/onecall_30/base"
          label="this link"
        />{" "}
        and subscribe to get your key, then just add it to the API .env file.
      </DocsText>

      <DocsText>
        One Call API is "pay as you call" but you still get 1000 free requests per day and
        you can set a limit to how many requests are allowed in the dashboard so you can
        ensure that you don't go over the 1000 requests if you don't want to pay anything.
      </DocsText>
    </Container>
  );
};

export default Docs3rdPartyWeather;
