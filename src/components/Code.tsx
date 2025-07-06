import { Code } from 'codice'

export function CodeDemo({ children, lang = 'javascript' }: { children: string; lang?: string }) {
  return <div className='code-example__item'><Code
  title="app/index.js"
  lang='javascript'
  preformatted
>
  {children}
</Code></div>;
}
