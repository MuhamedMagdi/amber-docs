import fs from 'fs'

export default function Post() {
  const a = fs.readdirSync('docs')
  return (
    <div>
      THIS IS HOMEPAGE
      <br/>
      {a.join(', ')}
    </div>
  )
}