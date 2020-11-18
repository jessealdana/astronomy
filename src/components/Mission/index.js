import React from 'react';
import { Page, Text, Document, StyleSheet, Font } from '@react-pdf/renderer';

const Mission = () => (
    <Document >
        <Page style={StyleSheet.body}>
            <Text style={styles.title}>Two Eyed Seeing - Indigenous Moons and NASA Missions - For the Benefit of All</Text>
            <Text style={styles.text}>
                As eloquently described by two Mi’kmaw elders:
            </Text>
            <Text style={styles.quote}>
                “Two-Eyed Seeing is learning to see from one eye with the strengths of
                Indigenous knowledges and ways of knowing, and from the other eye with the
                strengths of Western knowledges and ways of knowing, and to use both these
                eyes for the benefit of all.” (Bartlett, Marshall, and Marshall 2012, 336)
            </Text>
            <Text style={styles.text}>
                The Indigenous-based design of this project will inspire students to pursue opportunities in
                STEM or future STEM workforce by bringing together an expert Indigenous Astronomy team
                and their social and educational networks to reach a large underserved audience through original
                content development and learning strategies rooted in Indigenous Scientific Knowledge Systems.
            </Text>
            <Text style={styles.text}>
                Students will feel a greater sense of cultural pride, they will find more opportunities for the
                content to be more relevant to their lives. They will see science with a wider cultural lens that
                includes (and not excludes) people from diverse cultures. This unique combination of connecting
                science and culture and art in an authentic and innovative way in the classroom will inspire
                students’ curiosity and ignite their motivation to learn.
            </Text>
            <Text style={styles.text}>
                In 2014 the demographics of the nation’s classrooms were set to break a historic barrier because,
                “For the first time, the majority of students in America’s public schools would no longer be
                white” (Fay 2018). Geneva Gay, in the landmark book, “Culturally Responsive Teaching:
                Theory, Research, and Practice”, expanded the traditional view of culture that was defined by
                race and ethnicity to also include an individual’s beliefs, society’s norms, and social groups (Gay
                2000, 2010). Gay urges teachers to consider how deeply culture impacts learning, “What is
                commonly thought of as cultureless mainstream U.S. schooling is, in reality, Eurocentric
                culturally responsive education” (Gay 2010, 45).
            </Text>
            <Text style={styles.text}>
                In recently published evidence-based research (REF-A. Lee), results show culture plays a critical
                role in learning science better. Everyone learned better when cultural responsive pedagogy was
                combined with high quality rigor and caring. Underrepresented (URM) students in the culturally
                responsive (CR) course were nearly 8 x more likely to earn an ‘A’ as a final course grade as
                compared to URM students in the control course. Female underrepresented students soared.
                Final course grades for female URM students in the CR course were nearly one letter grade
                higher than female URM students in the control course. Measurable learning gains alongside
                increased learning engagement is critical, especially in underserved communities, our
                communities.
            </Text>
            <Text style={styles.text}>
                Since 2012 Native Skywatchers, (A. Lee 2007), has held Educator Training Workshops in
                collaboration with Fond du Lac Tribal and Community College (Jeff Tibbetts, Title III Director),
                Indian Education Specialists, and the MN Department of Education (Science Content Specialist-
                John Olson). Existing educational resources like native star maps, planispheres, lesson plans,
                storytelling videos, podcasts, and planetarium software are all available online.
            </Text>
        </Page>
        <Page style={StyleSheet.body}>
            <Text style={styles.text}>
                This project builds on this learning and teaching research of two-eyed seeing, active learning,
                and culturally responsive pedagogy to create and amplify Indigenous Astronomy infused
                curriculum paralleled with NASA content and curriculum delivered remotely to K-12 networks.
                This is multi-layered learning strategy is critically important in order to reach our Indigenous
                youth, and ultimately to create and deliver innovative opportunities and learning experience way
                beyond current NASA capabilities.
            </Text>
        </Page>
    </Document>
);

Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
  });

const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
      fontFamily: 'Oswald'
    },
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: 'justify',
      fontFamily: 'Times-Roman'
    },
    quote: {
        margin: 30,
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Times-Roman'
      },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
    pageNumber: {
      position: 'absolute',
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: 'center',
      color: 'grey',
    },
  });


export default Mission;