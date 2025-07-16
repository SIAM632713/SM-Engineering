import React from 'react';
import FireAlarm from "../component/services-fire-systems/Fire Alarm.jsx";
import Layout from "../component/Layout/layout.jsx";
import Overfiew from "../component/services-fire-systems/Overfiew.jsx";
import Benifit from "../component/services-fire-systems/benifit.jsx";
import Pump from "../component/services-fire-systems/Pump.jsx";
import FirePump from "../component/services-fire-systems/Fire Pump.jsx";
import Sprinkler from "../component/services-fire-systems/Sprinkler.jsx";
import FireSprinklerSystem from "../component/services-fire-systems/Fire Sprinkler System.jsx";

const FireSystemsPage = () => {
    return (
        <Layout>
            <FireAlarm/>
            <Overfiew/>
            <Benifit/>
            <Pump/>
            <FirePump/>
            <Sprinkler/>
            <FireSprinklerSystem/>
        </Layout>
    );
};

export default FireSystemsPage;