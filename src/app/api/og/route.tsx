import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import { DATA } from '@/data/resume';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    
    // Custom text or fallback to default
    const title = searchParams.get('title') || DATA.name;
    const description = searchParams.get('description') || DATA.description;
    
    // Using Inter font - make sure to adjust if you prefer another font
    const interRegular = await fetch(
      new URL('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2', import.meta.url)
    ).then((res) => res.arrayBuffer());

    // Font to be used
    const fontData = await interRegular;

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f8fafc',
            backgroundImage: 'radial-gradient(circle at 25px 25px, #e2e8f0 2%, transparent 0%), radial-gradient(circle at 75px 75px, #e2e8f0 2%, transparent 0%)',
            backgroundSize: '100px 100px',
            padding: '40px',
          }}
        >
          <div 
            style={{
              display: 'flex', 
              fontSize: 40,
              fontWeight: 'bold',
              color: '#0f172a',
              marginBottom: 20,
              textAlign: 'center',
              maxWidth: '80%',
            }}
          >
            {title}
          </div>
          
          <div style={{
            fontSize: 25, 
            color: '#334155',
            textAlign: 'center',
            maxWidth: '70%',
          }}>
            {description}
          </div>
          
          <div style={{
            marginTop: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{ fontSize: 25, color: '#334155', marginRight: 8 }}>
              by
            </div>
            <div style={{ fontSize: 25, fontWeight: 'bold', color: '#0f172a' }}>
              {DATA.name}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: fontData,
            style: 'normal',
            weight: 400,
          },
        ],
      }
    );
  } catch (e) {
    console.error(e);
    return new Response(`Failed to generate image`, {
      status: 500,
    });
  }
}
