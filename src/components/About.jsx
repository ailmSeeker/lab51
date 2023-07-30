let demo = 'https://via.placeholder.com/215' 
function About(image, about){

  return (
    <aside>
      <img onError={image = demo}src={image} alt='blog logo'/>
      <p>I explain with words and code</p>
    </aside>
  );
}

export default About;
