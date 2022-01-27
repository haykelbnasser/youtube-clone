import SideMenu from './SideMenu'
import check from '../check.png'


function SuggestionVideos() {
  const urlList = [
    {
      src: `https://www.youtube.com/embed/ufPCITfUQnQ?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title: `CSS-in-JS — Max Stoiber`,
      img: "https://yt3.ggpht.com/ytc/AKedOLSU2_r0OsSfOvYrLCmYH-9DaP4PgPpsjFqt6_mdKA=s88-c-k-c0x00ffffff-no-rj",
      name: "React-dev",
    },
    {
      src: `https://www.youtube.com/embed/v1JAUiqskiw?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title: `Modern Forms in React — Erik Rasmussen`,
      img: "https://yt3.ggpht.com/ytc/AKedOLSU2_r0OsSfOvYrLCmYH-9DaP4PgPpsjFqt6_mdKA=s88-c-k-c0x00ffffff-no-rj",
      name: "React-dev",
    },
    {
      src: `https://www.youtube.com/embed/N0wHweOu-LQ?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title: `Engineering led design — Lauren Argenta`,
      img: "https://yt3.ggpht.com/ytc/AKedOLSU2_r0OsSfOvYrLCmYH-9DaP4PgPpsjFqt6_mdKA=s88-c-k-c0x00ffffff-no-rj",
      name: "React-dev",
    },
    {
      src: `https://www.youtube.com/embed/xxbc3wAztl0?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title: `Rethinking Design Practices — Mark Dalgleish`,
      img: "https://yt3.ggpht.com/ytc/AKedOLSU2_r0OsSfOvYrLCmYH-9DaP4PgPpsjFqt6_mdKA=s88-c-k-c0x00ffffff-no-rj",
      name: "React-dev",
    },
    {
      src: `https://www.youtube.com/embed/xxbc3wAztl0?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title: `Rethinking Design Practices — Mark Dalgleish`,
      img: "https://yt3.ggpht.com/ytc/AKedOLSU2_r0OsSfOvYrLCmYH-9DaP4PgPpsjFqt6_mdKA=s88-c-k-c0x00ffffff-no-rj",
      name: "React-dev",
    },
    {
      src: `https://www.youtube.com/embed/xxbc3wAztl0?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title: `Rethinking Design Practices — Mark Dalgleish`,
      img: "https://yt3.ggpht.com/ytc/AKedOLSU2_r0OsSfOvYrLCmYH-9DaP4PgPpsjFqt6_mdKA=s88-c-k-c0x00ffffff-no-rj",
      name: "React-dev",
    },
    {
      src: `https://www.youtube.com/embed/xxbc3wAztl0?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title: `Rethinking Design Practices — Mark Dalgleish`,
      img: "https://yt3.ggpht.com/ytc/AKedOLSU2_r0OsSfOvYrLCmYH-9DaP4PgPpsjFqt6_mdKA=s88-c-k-c0x00ffffff-no-rj",
      name: "React-dev",
    },
    {
      src: `https://www.youtube.com/embed/xxbc3wAztl0?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title: `Rethinking Design Practices — Mark Dalgleish`,
      img: "https://yt3.ggpht.com/ytc/AKedOLSU2_r0OsSfOvYrLCmYH-9DaP4PgPpsjFqt6_mdKA=s88-c-k-c0x00ffffff-no-rj",
      name: "React-dev",
    },
  ];
  return (
    <div className='row mt-5'>
      <div className="col-1">
        <div className="row">

          <SideMenu props="Accueil" />
          <SideMenu props="Explorer" />
          <SideMenu props='Abonnements' />
          <SideMenu props='Bibliothèque' />

        </div>

      </div>
      <div className="col-11">
        <div className="row">
          {urlList.map((e, key) => <div className="col-3">

            <iframe
              title='react-summet'
              src={e.src}
              width='400'
              height='230'
              frameBorder='0'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            ></iframe>
            <div className='row '>
              <div className='col mt-2 mb-5'>
                <h6><img src={e.img} style={{ width: 36, borderRadius: 36 , marginRight:10 }} />
                  {e.title}</h6>
                {e.name} <img src={check} width="14" />

              </div>
            </div>



          </div>


          )}
        </div>
      </div>
    </div>
  );
}
export default SuggestionVideos;