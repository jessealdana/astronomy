import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    body: {
        paddingTop: 2,
        width: "400px",
        height: "600px"
    },
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: 'justify',
      fontFamily: 'Times-Roman'
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

// Create Document Component
const MyDocument = () => (
    <Document >
    <Page size="A4" style={{ backgroundColor: 'tomato' }}>
      <View style={{ color: 'white', textAlign: 'center', margin: 30 }}>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida laoreet elit vitae commodo. Sed facilisis commodo dolor sed ullamcorper. Praesent ac quam orci. Vestibulum nec sem urna. Pellentesque ultrices quam ut nisl dignissim, vel iaculis metus cursus. Etiam vehicula efficitur mauris. Vestibulum congue, sapien id molestie pellentesque, nunc est aliquet nunc, nec vulputate metus dui sed arcu. Nunc at ornare tellus.

              Quisque fringilla nec nisl ut fermentum. Donec consectetur metus lorem, et pellentesque odio eleifend tempus. Donec molestie augue et massa pretium, a ultricies leo tempor. Donec in vulputate mauris, ut fringilla turpis. Etiam diam sapien, ultricies ac sagittis at, commodo eu lacus. Quisque nulla nulla, imperdiet at sodales ultricies, efficitur et augue. Nam semper lorem blandit cursus tincidunt. Integer laoreet tincidunt massa, sed accumsan ipsum elementum ac. Duis mattis risus ac erat tincidunt hendrerit. Morbi interdum ac magna sit amet elementum. Duis eget lobortis elit. Phasellus mattis enim non suscipit eleifend. Aenean placerat luctus convallis. Mauris suscipit semper pulvinar. Integer ut nibh sit amet sapien posuere lacinia sit amet at urna. Nulla facilisi.

              Praesent a pretium magna. Curabitur pellentesque nulla posuere nunc porta facilisis. Sed finibus velit volutpat, pellentesque nulla a, imperdiet quam. Etiam sit amet lacus dolor. Vestibulum imperdiet massa arcu, quis interdum dui cursus at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed fringilla ullamcorper iaculis. Pellentesque gravida, quam sed sodales tincidunt, risus tellus pretium augue, vel suscipit magna orci vitae risus. Integer sit amet ullamcorper felis. Pellentesque non sapien sem.

              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam id metus mi. Praesent molestie pretium convallis. Vivamus tempus faucibus arcu, eget dapibus metus posuere non. Nullam dolor mi, faucibus ac tellus eget, elementum tempus mauris. Aliquam et sem velit. Donec at fringilla magna, at pellentesque ligula. Pellentesque varius turpis nulla, at tincidunt magna finibus eget. Nunc lorem lorem, convallis id blandit eu, rhoncus et augue. Suspendisse finibus justo et dapibus fermentum. Donec facilisis auctor efficitur.

              Vivamus turpis risus, mattis ac consectetur et, dictum ac tellus. Maecenas tincidunt pulvinar gravida. Vivamus tincidunt pellentesque dolor a porta. Pellentesque laoreet dolor quis enim imperdiet maximus. Sed felis mauris, tempor ac orci ut, blandit tempus ante. Nunc nulla ligula, condimentum fermentum porta ut, condimentum nec velit. Nulla eu est molestie, condimentum massa non, porta massa. Ut eget porttitor erat. Vestibulum faucibus ex nec risus commodo dapibus. Proin rhoncus massa tempus neque varius volutpat. In sagittis dapibus venenatis. Phasellus rutrum placerat vestibulum. Sed nec aliquet enim. Sed in dignissim odio. Aliquam rutrum arcu vitae nunc maximus, eget ornare neque accumsan. Nunc ac ex vitae mi molestie faucibus.</Text>
      </View>
      <View style={{ color: 'white', textAlign: 'center', margin: 30 }}>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida laoreet elit vitae commodo. Sed facilisis commodo dolor sed ullamcorper. Praesent ac quam orci. Vestibulum nec sem urna. Pellentesque ultrices quam ut nisl dignissim, vel iaculis metus cursus. Etiam vehicula efficitur mauris. Vestibulum congue, sapien id molestie pellentesque, nunc est aliquet nunc, nec vulputate metus dui sed arcu. Nunc at ornare tellus.

              Quisque fringilla nec nisl ut fermentum. Donec consectetur metus lorem, et pellentesque odio eleifend tempus. Donec molestie augue et massa pretium, a ultricies leo tempor. Donec in vulputate mauris, ut fringilla turpis. Etiam diam sapien, ultricies ac sagittis at, commodo eu lacus. Quisque nulla nulla, imperdiet at sodales ultricies, efficitur et augue. Nam semper lorem blandit cursus tincidunt. Integer laoreet tincidunt massa, sed accumsan ipsum elementum ac. Duis mattis risus ac erat tincidunt hendrerit. Morbi interdum ac magna sit amet elementum. Duis eget lobortis elit. Phasellus mattis enim non suscipit eleifend. Aenean placerat luctus convallis. Mauris suscipit semper pulvinar. Integer ut nibh sit amet sapien posuere lacinia sit amet at urna. Nulla facilisi.

              Praesent a pretium magna. Curabitur pellentesque nulla posuere nunc porta facilisis. Sed finibus velit volutpat, pellentesque nulla a, imperdiet quam. Etiam sit amet lacus dolor. Vestibulum imperdiet massa arcu, quis interdum dui cursus at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed fringilla ullamcorper iaculis. Pellentesque gravida, quam sed sodales tincidunt, risus tellus pretium augue, vel suscipit magna orci vitae risus. Integer sit amet ullamcorper felis. Pellentesque non sapien sem.

              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam id metus mi. Praesent molestie pretium convallis. Vivamus tempus faucibus arcu, eget dapibus metus posuere non. Nullam dolor mi, faucibus ac tellus eget, elementum tempus mauris. Aliquam et sem velit. Donec at fringilla magna, at pellentesque ligula. Pellentesque varius turpis nulla, at tincidunt magna finibus eget. Nunc lorem lorem, convallis id blandit eu, rhoncus et augue. Suspendisse finibus justo et dapibus fermentum. Donec facilisis auctor efficitur.

              Vivamus turpis risus, mattis ac consectetur et, dictum ac tellus. Maecenas tincidunt pulvinar gravida. Vivamus tincidunt pellentesque dolor a porta. Pellentesque laoreet dolor quis enim imperdiet maximus. Sed felis mauris, tempor ac orci ut, blandit tempus ante. Nunc nulla ligula, condimentum fermentum porta ut, condimentum nec velit. Nulla eu est molestie, condimentum massa non, porta massa. Ut eget porttitor erat. Vestibulum faucibus ex nec risus commodo dapibus. Proin rhoncus massa tempus neque varius volutpat. In sagittis dapibus venenatis. Phasellus rutrum placerat vestibulum. Sed nec aliquet enim. Sed in dignissim odio. Aliquam rutrum arcu vitae nunc maximus, eget ornare neque accumsan. Nunc ac ex vitae mi molestie faucibus.</Text>
      </View>
      <View style={{ color: 'white', textAlign: 'center', margin: 30 }}>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida laoreet elit vitae commodo. Sed facilisis commodo dolor sed ullamcorper. Praesent ac quam orci. Vestibulum nec sem urna. Pellentesque ultrices quam ut nisl dignissim, vel iaculis metus cursus. Etiam vehicula efficitur mauris. Vestibulum congue, sapien id molestie pellentesque, nunc est aliquet nunc, nec vulputate metus dui sed arcu. Nunc at ornare tellus.

              Quisque fringilla nec nisl ut fermentum. Donec consectetur metus lorem, et pellentesque odio eleifend tempus. Donec molestie augue et massa pretium, a ultricies leo tempor. Donec in vulputate mauris, ut fringilla turpis. Etiam diam sapien, ultricies ac sagittis at, commodo eu lacus. Quisque nulla nulla, imperdiet at sodales ultricies, efficitur et augue. Nam semper lorem blandit cursus tincidunt. Integer laoreet tincidunt massa, sed accumsan ipsum elementum ac. Duis mattis risus ac erat tincidunt hendrerit. Morbi interdum ac magna sit amet elementum. Duis eget lobortis elit. Phasellus mattis enim non suscipit eleifend. Aenean placerat luctus convallis. Mauris suscipit semper pulvinar. Integer ut nibh sit amet sapien posuere lacinia sit amet at urna. Nulla facilisi.

              Praesent a pretium magna. Curabitur pellentesque nulla posuere nunc porta facilisis. Sed finibus velit volutpat, pellentesque nulla a, imperdiet quam. Etiam sit amet lacus dolor. Vestibulum imperdiet massa arcu, quis interdum dui cursus at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed fringilla ullamcorper iaculis. Pellentesque gravida, quam sed sodales tincidunt, risus tellus pretium augue, vel suscipit magna orci vitae risus. Integer sit amet ullamcorper felis. Pellentesque non sapien sem.

              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam id metus mi. Praesent molestie pretium convallis. Vivamus tempus faucibus arcu, eget dapibus metus posuere non. Nullam dolor mi, faucibus ac tellus eget, elementum tempus mauris. Aliquam et sem velit. Donec at fringilla magna, at pellentesque ligula. Pellentesque varius turpis nulla, at tincidunt magna finibus eget. Nunc lorem lorem, convallis id blandit eu, rhoncus et augue. Suspendisse finibus justo et dapibus fermentum. Donec facilisis auctor efficitur.

              Vivamus turpis risus, mattis ac consectetur et, dictum ac tellus. Maecenas tincidunt pulvinar gravida. Vivamus tincidunt pellentesque dolor a porta. Pellentesque laoreet dolor quis enim imperdiet maximus. Sed felis mauris, tempor ac orci ut, blandit tempus ante. Nunc nulla ligula, condimentum fermentum porta ut, condimentum nec velit. Nulla eu est molestie, condimentum massa non, porta massa. Ut eget porttitor erat. Vestibulum faucibus ex nec risus commodo dapibus. Proin rhoncus massa tempus neque varius volutpat. In sagittis dapibus venenatis. Phasellus rutrum placerat vestibulum. Sed nec aliquet enim. Sed in dignissim odio. Aliquam rutrum arcu vitae nunc maximus, eget ornare neque accumsan. Nunc ac ex vitae mi molestie faucibus.</Text>
      </View>
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
  </Document>
);

export default MyDocument;