import React, { useState } from "react";
import { Anchor, Tabs, Text } from "@mantine/core";
import { IconClock, IconMapPin, IconTimezone } from "@tabler/icons-react";
import { getIconStyle } from "@utils/functions/iconStyle";

import { IAWrapper } from "../../wrapper";

import TimeIn from "../../components/TimeIn";
// import Timer from "../../components/TimeZone";

interface Props {
  type: "time_in" | "time_zone";
  location: string;
}

const SharedGlobalTime: React.FC<Props> = ({ type, location }) => {
  const [activeTab, setActiveTab] = useState<"time_in" | "time_zone">(type);

  return (
    <IAWrapper
      label={
        activeTab === "time_in" ? (
          <Text size="sm" c="dimmed">
            Data provided by{" "}
            <Anchor href="https://timeapi.io/" rel="noreferrer noopener">
              <Text component="span" c="blue.4">
                TimeAPI
              </Text>
            </Anchor>
          </Text>
        ) : undefined
      }
    >
      <Tabs
        value={activeTab}
        onChange={(val) => setActiveTab((val as "time_in" | "time_zone") || "time_in")}
        mt={-16}
      >
        <Tabs.List grow mb="lg">
          <Tabs.Tab value="time_in" leftSection={<IconMapPin style={getIconStyle(20)} />}>
            Time In
          </Tabs.Tab>
          <Tabs.Tab
            value="time_zone"
            leftSection={<IconTimezone style={getIconStyle(20)} />}
          >
            Time Zone
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="time_in">
          <TimeIn withIAWrapper={false} location={location} />
        </Tabs.Panel>

        <Tabs.Panel value="time_zone">
          {/* <Timer withIAWrapper={false} /> */}
          <></>
        </Tabs.Panel>
      </Tabs>
    </IAWrapper>
  );
};

export default SharedGlobalTime;
