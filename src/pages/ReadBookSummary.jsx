import React, { useEffect, useState } from 'react'

function ReadBookSummary() {
  const styles = {
    content: {
      lineHeight: "1.7em",
      letterSpacing: "0.2px",
      fontSize: "18px",
      fontFamily: "Nanum Myeongjo, serif",
      width: "60%",
      
    }
  }
  const [data, setdata] = useState([]);

  useEffect(() => {
    //fetch data and assign to state
    setdata(
        {
          bookID: 1,
          title: "Harry Potter",
          author: "Jo",
          content: "Cras ut pretium ligula. Nulla fermentum sed velit vitae condimentum. Fusce aliquam mauris a facilisis pulvinar. Mauris tortor ligula, semper quis commodo quis, imperdiet et erat. Donec suscipit bibendum mattis. Duis euismod imperdiet neque eget porttitor. Suspendisse luctus sapien at tristique molestie. Maecenas eu quam pulvinar, rhoncus nulla quis, mattis arcu. Nulla in ullamcorper mauris. Cras molestie nec eros nec sodales. Nam pretium elit ac porttitor dictum. Etiam tincidunt vulputate tellus. Suspendisse nunc turpis, elementum sit amet accumsan ac, facilisis a ex. Fusce mollis quam et consequat tristique. Quisque porttitor, felis quis interdum aliquet, odio diam mattis nunc, in pulvinar purus lacus quis ante. Etiam posuere sodales tempusNunc eu posuere nisl. Morbi nulla felis, rhoncus in ante vitae, bibendum auctor ipsum. Praesent imperdiet accumsan urna ac elementum. Mauris elit ex, consectetur non nisi nec, euismod facilisis tellus. Nulla tempor bibendum accumsan. Aliquam tempor aliquam enim, id varius dui. Cras a neque id risus euismod mattis. Phasellus ex sapien, euismod et sodales in, egestas vel nibh. Ut a nisi libero. In eu orci molestie, malesuada leo a, interdum magna. Nullam felis dolor, tristique non elit non, faucibus dictum justo. Aliquam quis dui sagittis, finibus eros non, pellentesque tellus. Duis ultricies convallis odio facilisis viverra. Cras imperdiet eros id felis molestie ultrices. Nam finibus, ligula nec ornare convallis, odio justo pellentesque odio, non sollicitudin eros nulla et erat. Fusce a leo at ante ultricies iaculis vitae sit amet nisl."
        }
       )
 },[]);

  return (
    <div>
      <h1>{data.title}</h1>
      <p style={styles.content}>{data.content}</p>
    </div>
  )
}

export default ReadBookSummary