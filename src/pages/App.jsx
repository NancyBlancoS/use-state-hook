import '../styles/styles.css';

import InputField from '../organism/input-field';
import Layout from '../templates/layout';
import ShowHideText from '../organism/show-hide';
import TextReverser from '../organism/text-reverser';
import TextStyler from '../organism/text-styler';

function App() {

  return (
    <Layout>
      <ShowHideText/>
      <InputField />
      <TextReverser/>
      <TextStyler/>
    </Layout>

  )
}

export default App;