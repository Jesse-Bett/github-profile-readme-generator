import React from "react"
import { useState } from 'react';
import MarkdownPreview from "../components/markdownPreview";
import Markdown from '../components/markdown';
import Title from '../components/title';
import Subtitle from '../components/subtitle';
import Work from '../components/work';
import Social from '../components/social';
import Addons from '../components/addons';
import SEO from "../components/seo"
import './index.css'

const IndexPage = () => {
  const [prefix, setPrefix] = useState({
    title: "Hi 👋, I'm",
    currentWork: '🔭 I’m currently working on',
    currentLearn: '🌱 I’m currently learning',
    collaborateOn: '👯 I’m looking to collaborate on',
    helpWith: '🤔 I’m looking for help with',
    ama: '💬 Ask me about',
    contact: '📫 How to reach me',
    funFact: '⚡ Fun fact',
    portfolio: '👨‍💻 All of my projects are available at',
    blog: '📝 I regulary write articles on',
  });
  const [data, setData] = useState({
    title: '',
    subtitle: 'A passionate frontend developer from India',
    currentWork: '',
    currentLearn: '',
    collaborateOn: '',
    helpWith: '',
    ama: '',
    contact: '',
    funFact: '',
    visitorsBadge: true,
    githubStats: true,
  });
  const [link, setLink] = useState({
    currentWork: '',
    collaborateOn: '',
    helpWith: '',
    portfolio: '',
    blog: '',
  });
  const [social, setSocial] = useState({
    github: '',
    dev: '',
    linkedin: '',
    codepen: '',
    stackoverflow: '',
    kaggle: '',
    codesandbox: '',
    fb: '',
    instagram: '',
    twitter: '',
  });
  const [generatePreview, setGeneratePreview] = useState(false);
  const handlePrefixChange = (field, e) => {
    let change = { ...prefix }
    change[field] = e.target.value;
    setPrefix(change);
  }
  const handleDataChange = (field, e) => {
    let change = { ...data }
    change[field] = e.target.value;
    setData(change);
  }
  const handleLinkChange = (field, e) => {
    let change = { ...link }
    change[field] = e.target.value;
    setLink(change);
  }
  const handleSocialChange = (field, e) => {
    let change = { ...social }
    change[field] = e.target.value;
    setSocial(change);
  }
  const handleCheckChange = (field) => {
    let change = { ...data }
    change[field] = !change[field];
    setData(change);
  }
  const handleGenerate = () => {
    if(data.visitorsBadge || data.githubStats) {
      if(social.github){
        // Markdown(prefix, data, link, social);
        setGeneratePreview(!generatePreview);
      }
    } else {
      // Markdown(prefix, data, link, social);
      setGeneratePreview(!generatePreview);
    }
  }
  return (
    <>
      <SEO title="Home" />

      <Title data={data} prefix={prefix} handleDataChange={handleDataChange} handlePrefixChange={handlePrefixChange} />
      <Subtitle data={data} handleDataChange={handleDataChange} />
      <Work prefix={prefix} data={data} link={link} handlePrefixChange={handlePrefixChange} handleLinkChange={handleLinkChange} handleDataChange={handleDataChange}/>
      <Social social={social} handleSocialChange={handleSocialChange} />
      <Addons data={data} handleCheckChange={handleCheckChange} />

      <div className="section">
        {(data.visitorsBadge || data.githubStats) && !social.github ?
         <div className="warning">Please add github username to use these add-ons</div> : ''}
      </div>
      <div className="submit">
        <div className="button generate" onClick={handleGenerate}>Generate README</div> 
      </div>

      {generatePreview ? <div className="section preview"><Markdown prefix={prefix} data={data} link={link} social={social}/></div> : ''}
    </>
  )
}

export default IndexPage
