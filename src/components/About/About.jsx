import "./About.css"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import halalLogo from "../../assets/halal.png";
import ifsLogo from "../../assets/ifs.png";

function About() {
    return (
      <div className="about-wrapper">
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#EB9424', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #EB9424' }}
                date="1999. godina"
                iconStyle={{ background: '#EB9424', color: '#fff' }}
                icon={""}
            >
                <h3 className="vertical-timeline-element-title">Naš početak</h3>
                <p>
                Osmo d.o.o., porodična firma koju su osnovali Emira i Kemal Hasanović, započela je svoju priču kao mala trgovina, posvećena snadbijevanju domaćinstava osnovnim namirnicama.                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2006. godina"
                contentStyle={{ background: '#EB9424', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #EB9424' }}
                iconStyle={{ background: '#EB9424', color: '#fff' }}
                icon={""}
            >
                <h3 className="vertical-timeline-element-title">Brend "Sito"</h3>
                <p>
                Proširujemo našu djelatnost na pekarstvo, koje ubrzo postaje osnovna djelatnost firme. Danas, pored dva robna marketa, Osmo d.o.o. poslue i kroz sedam mini pekara pod brendom "Sito", koje su prepoznatljive po svojoj kvalitetnoj ponudi.                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2023. godina"
                contentStyle={{ background: '#EB9424', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #EB9424' }}
                iconStyle={{ background: '#EB9424', color: '#fff' }}
                icon={""}
            >
                <h3 className="vertical-timeline-element-title">Ideja o proizvodu "Sitortilla"</h3>
                <p>
                Razvili smo ideju o otvaranju pogona za proizvodnju tortilja.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2024. godina"
                contentStyle={{ background: '#EB9424', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #EB9424' }}
                iconStyle={{ background: '#EB9424', color: '#fff' }}
                icon={""}
            >
                <h3 className="vertical-timeline-element-title">Realizovana ideja "Sitortilla"</h3>
                <p>
                Trenutno posjedujemo modernu automatsku liniju za proizvodnju tortilja, sa kapacitetom od 6000 komada na sat.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="danas"
                contentStyle={{ background: '#EB9424', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #EB9424' }}
                iconStyle={{ background: '#EB9424', color: '#fff' }}
                icon={""}
            >
                <h3 className="vertical-timeline-element-title">Zauvijek dobar komšija!</h3>
                <p>
                Danas Osmo d.o.o. zapošljava preko 90 ljudi, ponosno se oslanjajući na dugogodišnje iskustvo i kontinuirani rast.
                </p>
            </VerticalTimelineElement>
            </VerticalTimeline>
            <div className="about-text">
                <p>Osmo d.o.o. posjeduje certifikate: Halal standard BAS 1049:2023 i IFS Food v8.</p>
                <div className="about-certificates">
                    <img className="about-halal-logo" src={halalLogo} alt="Halal Icon" />
                    <img className="about-ifs-logo" src={ifsLogo} alt="IFS Icon" />
                </div>
            </div>
      </div>
    );
  }
  
export default About;