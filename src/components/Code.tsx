import { useEffect, useState } from "react";
import { codeToHtml } from 'shiki';

export function Code({ children, lang = 'javascript' }: { children: string; lang?: string }) {
  const [code, setcode] = useState('');

  useEffect(() => {
    const fetchCode = async () => {
      const html = await codeToHtml(children, {
        lang: lang,
        theme: 'vitesse-light',
      });
      setcode(html);
    };
    fetchCode();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: code }}></div>;
}
