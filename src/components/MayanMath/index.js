import React from 'react';
import { Page, Text, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import mayaArab from "../images/mayaArab.png";
import fiveDots from "../images/fiveDots.png";
import position from "../images/position.png";
import exampleOne from "../images/exampleOne.png";
import exampleTwo from "../images/exampleThree.png";
import exampleThree from "../images/exampleThree.png"

const MayanMath = () => (
    <Document >
        <Page style={styles.body}>
            <Text style={styles.title}>Mayan Numeration</Text>
            <Text style={styles.text}>
                Mayan Math seems really simple and it can be very fun! All we need are three symbols to create numbers: bars, dots, and a football shape representing a shell. The dot represents a '1', the bar represents a '5' and the shell is used either as a '0' or as a place holder (which we will learn next). These symbols combine so that 5 dots can be replaced by a bar, and four bars are replaced by a shell with a dot placed above it. These two simple rules form the basis of a base 20 numerical system that allows for very large numbers to be manipulated rather easily, with only the use of three symbols. This system with base 20 is called a vigesimal system.  What makes this math easy and fun is that you work by positional notation... this means you will be working in levels from bottom to top and each level will have a different value for your symbols.  The video and other materials on this page walk through the positional notation system.   
            </Text>
            <Text style={styles.title}>Mayan Numbers</Text>
            <Text style={styles.text}>
                By far the most examples we have of Mayan numbers come from their use in representing dates in their own Mayan calendar. When counting days, scribes used a method known as the Long Count, specifically constructed to measure time. When counting other things, however, like feathers or cacao beans, scribes would have followed the method described on this and the following pages. (Refer to the Calendar section for the Long Count.)
            </Text>
            <Text style={styles.text}>
                Mayan numbers follow a system that first shows up in the archaeological record during the 1st century B.C. in the Isthmus of Tehuantepec. Instead of the base ten--or decimal--system commonly used today, ancient Mesoamericans used a base twenty--or vigesimal--system. Also, instead of using ten different symbols for 0 - 9, they used only three: a dot to represent '1'; a bar for five dots, or '5'; and a shell as a place holder, or '0'.
            </Text>
            <Image
                style={styles.image}
                src={ mayaArab }
            />
            <Text style={styles.text}>
                Using these symbols, two equivalencies (we also call them rules) make computations possible. The first is that five dots should be replaced with a bar.
            </Text>
            <Image
                style={styles.image}
                src={fiveDots}
            />
            <Text style={styles.text}>
                The second equivalency demonstrates the positional aspect of Mayan numbers. The decimal system in common use today is positional in that new spaces, or new registers, need to be created to the left as registers fill up. Going from nine to ten requires the place holder, '0', and the placement of a '1' in a new register to its left. Mayan numbers work in a similar way, only the registers go from bottom to top as opposed to right to left. Also, the lower register fills up at nineteen rather than nine.
            </Text>
            <Image
                style={styles.image}
                src={position}
            />
            <Text style={styles.text}>
                This means the second rule or equivalency does not allow for 4 bars. If you want to write a '20' you would need to place a dot in the upper register and a shell (zero or place holder) at the bottom register.
            </Text>
            <Text style={styles.text}>
                If you wanted to write a '21' you would place a dot on both, the bottom and the top register.
            </Text>
            <Text style={styles.text}>
                So, how would you write a nineteen? A '19' will fill up the bottom register with the maximum amount of symbols allowed: three bars and four dots.
            </Text>
            <Text style={styles.text}>
                The following examples demonstrate the proper representation of Mayan numbers. 
            </Text> 
            <Image
                style={styles.image}
                src={exampleOne}
            />
                        <Image
                style={styles.image}
                src={exampleTwo}
            />
                        <Image
                style={styles.image}
                src={exampleThree}
            /> 
            <Text style={styles.text}>
                With two registers, the largest number would be nineteen in the upper box and nineteen in the lower, corresponding to three hundred ninety nine. Adding one more dot forces the creation of a new register, the third, with the highest box holding a dot, and the lower two registers each holding a shell to represent four hundred. Each dot in each register above corresponds to a higher power of 20: 1, 20, 400, 8000, 160000, ...
            </Text> 
            <Text style={styles.text}>
                This means whatever symbols you have at the first lower level will get multiplied by '1', the second place symbols you have will be multiplied by '20', the third by '400' and so on... each level corresponding to a higher power of 20.
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
//   ReactPDF.render(<MayanMath />);

export default MayanMath;