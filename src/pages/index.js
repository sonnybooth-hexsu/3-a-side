import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Questions from "../components/questions"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="text-center mt-4 p-4">
      <h1 className="text-3xl">KICK OFF!</h1>
      <p>Guess the footballer who has played for the 3 clubs.</p>
      <p>
        Get it right <strong className="text-primary">SCORE</strong> a goal. Get
        it wrong <strong className="text-red-500">CONCEDE</strong> a goal
      </p>
      <Questions />
    </div>
  </Layout>
)

export default IndexPage
