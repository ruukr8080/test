// quartz/components/Nav.tsx
import { QuartzComponentConstructor } from "./types"

const Nav: QuartzComponentConstructor = () => {
  function NavComponent() {
    // study , projects , resume , ref ,
    return (
      <nav class={"navbar"} className="Navbar">
        {/*<a href={baseDir}>{title}</a>*/}

        <a href={undefined} className="post">
          <svg
            width="31"
            height="27"
            viewBox="0 0 31 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_i_0_1)">
              <path
                d="M8.5 4.75H22.5625C23.3084 4.75 24.0238 5.04632 24.5512 5.57376C25.0787 6.10121 25.375 6.81658 25.375 7.5625V8.5M11.3125 21.625H3.8125C3.06658 21.625 2.35121 21.3287 1.82376 20.8012C1.29632 20.2738 1 19.5584 1 18.8125V2.875C1 2.37772 1.19754 1.90081 1.54917 1.54917C1.90081 1.19754 2.37772 1 2.875 1H12.25C12.7473 1 13.2242 1.19754 13.5758 1.54917C13.9275 1.90081 14.125 2.37772 14.125 2.875V4.75"
                stroke="#88A092"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <g filter="url(#filter1_i_0_1)">
              <path
                d="M24.1338 13.8156L27.5594 17.2413M19.4256 25.375L28.4162 16.3844C28.6461 16.1606 28.8293 15.8933 28.9551 15.5981C29.0808 15.3029 29.1467 14.9857 29.1488 14.6649C29.151 14.344 29.0894 14.0259 28.9676 13.7291C28.8458 13.4322 28.6662 13.1626 28.4393 12.9357C28.2125 12.7088 27.9428 12.5292 27.6459 12.4074C27.3491 12.2857 27.031 12.224 26.7102 12.2262C26.3893 12.2283 26.0721 12.2942 25.7769 12.42C25.4817 12.5457 25.2144 12.7289 24.9906 12.9588L16 21.9494V25.375H19.4256Z"
                stroke="#877B6D"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_i_0_1"
                x="0"
                y="0"
                width="26.375"
                height="26.625"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_1" />
              </filter>
              <filter
                id="filter1_i_0_1"
                x="15"
                y="11.2261"
                width="15.1489"
                height="19.1489"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_1" />
              </filter>
            </defs>
          </svg>
        </a>

        <a href={undefined} className="project">
          <svg
            width="32"
            height="28"
            viewBox="0 0 32 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_i_10_2)">
              <path
                d="M16 19.5C16 15.9647 16 14.1963 17.0982 13.0982C18.1963 12 19.9639 12 23.5 12C27.0353 12 28.8037 12 29.9018 13.0982C31 14.1963 31 15.9639 31 19.5C31 23.0353 31 24.8037 29.9018 25.9018C28.8037 27 27.0361 27 23.5 27C19.9647 27 18.1963 27 17.0982 25.9018C16 24.8037 16 23.0361 16 19.5Z"
                stroke="#877B6D"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M26.6579 22.6579C27.1442 22.6579 27.539 22.2537 27.539 21.7555V20.7766C27.539 20.5366 27.6313 20.3068 27.7963 20.1379L28.1082 19.8189C28.1911 19.7335 28.2375 19.6191 28.2375 19.5C28.2375 19.3809 28.1911 19.2665 28.1082 19.181L27.7963 18.8621C27.6309 18.691 27.5386 18.4622 27.539 18.2242V17.2445C27.539 16.7463 27.1442 16.3421 26.6579 16.3421M20.3421 22.6579C19.8558 22.6579 19.4611 22.2537 19.4611 21.7555V20.7766C19.4611 20.5366 19.3687 20.3068 19.2037 20.1379L18.8918 19.8189C18.8089 19.7335 18.7625 19.6191 18.7625 19.5C18.7625 19.3809 18.8089 19.2665 18.8918 19.181L19.2037 18.8621C19.3687 18.6932 19.4611 18.4634 19.4611 18.2242V17.2445C19.4611 16.7463 19.8558 16.3421 20.3421 16.3421M21.9211 19.5H21.9282M25.0718 19.5H25.079"
                stroke="#877B6D"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <g filter="url(#filter1_i_10_2)">
              <path
                d="M8.5 4.75H22.5625C23.3084 4.75 24.0238 5.04632 24.5512 5.57376C25.0787 6.10121 25.375 6.81658 25.375 7.5625V8.5M11.3125 21.625H3.8125C3.06658 21.625 2.35121 21.3287 1.82376 20.8012C1.29632 20.2738 1 19.5584 1 18.8125V2.875C1 2.37772 1.19754 1.90081 1.54917 1.54917C1.90081 1.19754 2.37772 1 2.875 1H12.25C12.7473 1 13.2242 1.19754 13.5758 1.54917C13.9275 1.90081 14.125 2.37772 14.125 2.875V4.75"
                stroke="#88A092"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_i_10_2"
                x="15"
                y="11"
                width="17"
                height="21"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_10_2" />
              </filter>
              <filter
                id="filter1_i_10_2"
                x="0"
                y="0"
                width="26.375"
                height="26.625"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_10_2" />
              </filter>
            </defs>
          </svg>
        </a>

        <a href={undefined} className="resume">
          <svg
            width="32"
            height="28"
            viewBox="0 0 32 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_i_0_3)">
              <path
                d="M15 25C17.9881 21.0313 24.9431 20.814 28 25M24.7481 15.25C24.7481 16.112 24.4057 16.9386 23.7962 17.5481C23.1867 18.1576 22.3601 18.5 21.4981 18.5C20.6362 18.5 19.8095 18.1576 19.2 17.5481C18.5906 16.9386 18.2481 16.112 18.2481 15.25C18.2481 14.388 18.5906 13.5614 19.2 12.9519C19.8095 12.3424 20.6362 12 21.4981 12C22.3601 12 23.1867 12.3424 23.7962 12.9519C24.4057 13.5614 24.7481 14.388 24.7481 15.25Z"
                stroke="#877B6D"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <g filter="url(#filter1_i_0_3)">
              <path
                d="M8.5 4.75H22.5625C23.3084 4.75 24.0238 5.04632 24.5512 5.57376C25.0787 6.10121 25.375 6.81658 25.375 7.5625V8.5M11.3125 21.625H3.8125C3.06658 21.625 2.35121 21.3287 1.82376 20.8012C1.29632 20.2738 1 19.5584 1 18.8125V2.875C1 2.37772 1.19754 1.90081 1.54917 1.54917C1.90081 1.19754 2.37772 1 2.875 1H12.25C12.7473 1 13.2242 1.19754 13.5758 1.54917C13.9275 1.90081 14.125 2.37772 14.125 2.875V4.75"
                stroke="#88A092"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_i_0_1"
                x="13.7499"
                y="10.75"
                width="15.5002"
                height="19.5001"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_1" />
              </filter>
              <filter
                id="filter1_i_0_1"
                x="0"
                y="0"
                width="26.375"
                height="26.625"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_1" />
              </filter>
            </defs>
          </svg>
        </a>
      </nav>
    )
  }

  NavComponent.css = `
    .navbar {
      display: flex;
      width: 100%;
      text-align: center;
      
        flex-wrap: wrap;
    }
    .navbar > a{
    font-size: .7rem;
       width: calc(100% / 3);
    }
  `

  return NavComponent
}

export default Nav
