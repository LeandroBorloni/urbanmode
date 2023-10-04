import Title from "@/components/Title"
import CardRoupa from "@/components/CardRoupas";
import NavBar from "@/components/NavBar";

async function carregarRoupas() {
  const url = "http://localhost:3001/Roupas"
  const resposta = await fetch(url)
  const json = await resposta.json()
  return json
}


export default async function Home() {
  const roupas = await carregarRoupas()
  return (
    <>
      <NavBar></NavBar>
      <Title>Mais vistos</Title>
      <section className="flex flex-wrap">
        {roupas.map(roupa => <CardRoupa roupa={roupa}></CardRoupa>)}
      </section>
      

      <Title>Lançamentos</Title>
    </>
  )
}
