function Dynamic({ data }){

  return (
    <ul>
      {
        data.map((data , index)=>(
          <li key={index+1}>{data.value}</li>
        ))
      }
    </ul>
  );

};

export async function getStaticProps() {
  const res = await fetch("https://635a3b956f97ae73a62721cd.mockapi.io/data");
  const data = await res.json();

  return {
    props: {
      data,
    },
  }
};
export default Dynamic;