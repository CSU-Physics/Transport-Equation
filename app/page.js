import Image from "next/image";
import photo_1D from "./Assets/1D.png"
import photo_0 from "./Assets/1D.jpg"
import gif_1D from "./Assets/1D.gif"
import photo_2D from "./Assets/2D.png"
import photo_3D from "./Assets/Untitled.png"
import gif_2D from "./Assets/2D.gif"
import gif_3D from "./Assets/3D.gif"
import header from "./Assets/header.jpeg"
import { FaArrowRight, FaGithub, FaHome } from "react-icons/fa";
import "./LaTeXML.css"
import "./ltx-article.css"
import "./ltx-listings.css"
export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="nav-shell">
          <a className="brand" href="#top" aria-label="Transport Equation home">
            <span className="brand-mark">TE</span>
            <span><strong>Transport Equation</strong><small>Radioactive pollution modeling</small></span>
          </a>
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#theory">Theory</a>
            <a href="#simulations">Simulations</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="nav-home" href="https://csu-physics.github.io/" aria-label="CSU Physics projects"><FaHome /></a>
        </div>
      </header>

      <section className="hero" id="top">
        <Image src={header} alt="Scientific visualization of transport and diffusion" className="hero-image" priority />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Open computational physics project</p>
          <h1>Radioactive Pollution Transport in Flowing Water</h1>
          <p className="hero-lede">An interactive presentation of the convection–diffusion model and MATLAB simulations for instantaneous radioactive releases in one, two, and three dimensions.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#simulations">Explore simulations <FaArrowRight /></a>
            <a className="button button-secondary" href="https://github.com/CSU-Physics/Transport-Equation" target="_blank" rel="noreferrer"><FaGithub /> View source</a>
          </div>
        </div>
      </section>

      <div className="article-shell">
        <section className="intro-card" id="about">
          <div>
            <p className="section-kicker">Project overview</p>
            <h2>From pulsed neutron activation to transport modeling</h2>
          </div>
          <div className="intro-copy" >
            <p>In an earlier study, we showed how Pulsed Neutron Activation (PNA) analysis could be implemented to estimate the flow speed in a one-dimensional pipeline <a className="citation-link" href="https://doi.org/10.1080/00295450.2019.1693214" target="_blank" rel="noreferrer">[1]</a>. The neutron capture by target stable nuclides, like Oxygen-16 in water, leads to radioactive Nitrogen-16 emitting high-energy
            gamma-rays, which travels with flowing water in a channel and can be detected and analyzed downstream in the pipe to get information about its average transport time. Then by having the traveled
            distance, i.e., the distance between the gamma source and the gamma detector, one can obtain
            the speed of the activity and, consequently, the flow speed and mass rate in the pipeline. This
            report shows how we can extend the technique to study pollution diffusion, including radioactive
            pollution, in a three-dimensional stream.</p>
            <div className="citation-note" id="reference-1">
              <span>[1]</span>
              <p>M. R. Hadizadeh, <a href="https://doi.org/10.1080/00295450.2019.1693214" target="_blank" rel="noreferrer"><cite>An Overview of the Application of Pulsed Neutron Activation in Flow Measurements</cite></a>, <cite>Nuclear Technology</cite> (2019), 1–9.</p>
            </div>
          </div>
        </section>
        {/* Transport_Equation */}
        <section className="theory-section" id="theory" >
          <p className="section-kicker">Mathematical model</p>
          <h2>Transport equation in three dimensions</h2>
          <div>
            <div className={"my-2 p-4"}>
              <div className={"mb-8"} >
                <p className="ltx_p">The transport of pollution in a three-dimensional stream with the diffusion coefficient <math id="S1.p1.m1" className="ltx_Math" alttext="D" display="inline"><mi>D</mi></math> flowing with velocity <span className="ltx_text ltx_markedasmath ltx_font_bold">v</span>, when there is source or sink <math id="S1.p1.m3" className="ltx_Math" alttext="{\cal R}" display="inline"><mi className="ltx_font_mathcaligraphic">ℛ</mi></math>, can be described by the convection-diffusion equation</p>
              </div>
              <table id="S1.E1" className="ltx_equation ltx_eqn_table">
                <tbody><tr className="ltx_equation ltx_eqn_row ltx_align_baseline">
                  <td className="ltx_eqn_cell ltx_eqn_center_padleft"></td>
                  <td className="ltx_eqn_cell ltx_align_center"><math id="S1.E1.m1" className="ltx_Math" alttext="\frac{\partial C}{\partial t}=\nabla\cdot(D\,\nabla C)-\nabla\cdot(C\,\textbf{%v})+{\cal R}," display="block"><mrow><mrow><mfrac><mrow><mo rspace="0em">∂</mo><mi>C</mi></mrow><mrow><mo rspace="0em">∂</mo><mi>t</mi></mrow></mfrac><mo>=</mo><mrow><mrow><mrow><mo>∇</mo><mo lspace="0em" rspace="0.222em">⋅</mo><mrow><mo stretchy="false">(</mo><mrow><mi>D</mi><mo lspace="0.337em">⁢</mo><mrow><mo rspace="0.167em">∇</mo><mi>C</mi></mrow></mrow><mo stretchy="false">)</mo></mrow></mrow><mo>−</mo><mrow><mo>∇</mo><mo lspace="0em" rspace="0.222em">⋅</mo><mrow><mo stretchy="false">(</mo><mrow><mi>C</mi><mo lspace="0.170em">⁢</mo><mtext className="ltx_mathvariant_bold">v</mtext></mrow><mo stretchy="false">)</mo></mrow></mrow></mrow><mo>+</mo><mi className="ltx_font_mathcaligraphic">ℛ</mi></mrow></mrow><mo>,</mo></mrow></math></td>
                  <td className="ltx_eqn_cell ltx_eqn_center_padright"></td>
                  <td rowSpan="1" className="ltx_eqn_cell ltx_eqn_eqno ltx_align_middle ltx_align_right"><span className="ltx_tag ltx_tag_equation ltx_align_right">(1)</span></td>
                </tr></tbody>
              </table>
            </div>

            <div className={"my-2 p-4"}>
              <div className={"mb-8"} >
                <p className="ltx_p">where <math id="S1.p1.m4" className="ltx_Math" alttext="C" display="inline"><mi>C</mi></math> is the pollution concentration.
                  The transport equation (<a href="#S1.E1" title="In I Transport equation in three dimensions ‣ Numerical simulation of radioactive pollution diffusion in 3D stream" className="ltx_ref"><span className="ltx_text ltx_ref_tag">1</span></a>) in a Cartesian coordinate system, where the fluid is moving with the constant velocity of <span className="ltx_text ltx_markedasmath ltx_font_bold">v</span> can be represented as</p>
              </div>

              <table id="A2.EGx1" className="ltx_equationgroup ltx_eqn_eqnarray ltx_eqn_table">

                <tbody id="S1.E2"><tr className="ltx_equation ltx_eqn_row ltx_align_baseline">
                  <td className="ltx_eqn_cell ltx_eqn_center_padleft"></td>
                  <td className="ltx_td ltx_align_right ltx_eqn_cell"><math id="S1.E2.m1" className="ltx_Math" alttext="\displaystyle\frac{\partial C(x,y,z,t)}{\partial t}" display="inline"><mstyle displaystyle="true"><mfrac><mrow><mo rspace="0em">∂</mo><mrow><mi>C</mi><mo>⁢</mo><mrow><mo stretchy="false">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy="false">)</mo></mrow></mrow></mrow><mrow><mo rspace="0em">∂</mo><mi>t</mi></mrow></mfrac></mstyle></math></td>
                  <td className="ltx_td ltx_align_center ltx_eqn_cell"><math id="S1.E2.m2" className="ltx_Math" alttext="\displaystyle=" display="inline"><mo>=</mo></math></td>
                  <td className="ltx_td ltx_align_left ltx_eqn_cell"><math id="S1.E2.m3" className="ltx_Math" alttext="\displaystyle\left(D_{x}\frac{\partial^{2}C(x,y,z,t)}{\partial x^{2}}+D_{y}%\frac{\partial^{2}C(x,y,z,t)}{\partial y^{2}}+D_{z}\frac{\partial^{2}C(x,y,z,t%)}{\partial z^{2}}\right)" display="inline"><mrow><mo>(</mo><mrow><mrow><msub><mi>D</mi><mi>x</mi></msub><mo>⁢</mo><mstyle displaystyle="true"><mfrac><mrow><msup><mo>∂</mo><mn>2</mn></msup><mrow><mi>C</mi><mo>⁢</mo><mrow><mo stretchy="false">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy="false">)</mo></mrow></mrow></mrow><mrow><mo rspace="0em">∂</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mstyle></mrow><mo>+</mo><mrow><msub><mi>D</mi><mi>y</mi></msub><mo>⁢</mo><mstyle displaystyle="true"><mfrac><mrow><msup><mo>∂</mo><mn>2</mn></msup><mrow><mi>C</mi><mo>⁢</mo><mrow><mo stretchy="false">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy="false">)</mo></mrow></mrow></mrow><mrow><mo rspace="0em">∂</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac></mstyle></mrow><mo>+</mo><mrow><msub><mi>D</mi><mi>z</mi></msub><mo>⁢</mo><mstyle displaystyle="true"><mfrac><mrow><msup><mo>∂</mo><mn>2</mn></msup><mrow><mi>C</mi><mo>⁢</mo><mrow><mo stretchy="false">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy="false">)</mo></mrow></mrow></mrow><mrow><mo rspace="0em">∂</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></mfrac></mstyle></mrow></mrow><mo>)</mo></mrow></math></td>
                  <td className="ltx_eqn_cell ltx_eqn_center_padright"></td>
                  <td rowSpan="1" className="ltx_eqn_cell ltx_eqn_eqno ltx_align_middle ltx_align_right"><span className="ltx_tag ltx_tag_equation ltx_align_right">(2)</span></td>
                </tr></tbody>
                <tbody id="S1.E3"><tr className="ltx_equation ltx_eqn_row ltx_align_baseline">
                  <td className="ltx_eqn_cell ltx_eqn_center_padleft"></td>
                  <td className="ltx_td ltx_eqn_cell"></td>
                  <td className="ltx_td ltx_align_center ltx_eqn_cell"><math id="S1.E3.m1" className="ltx_Math" alttext="\displaystyle-" display="inline"><mo>−</mo></math></td>
                  <td className="ltx_td ltx_align_left ltx_eqn_cell"><math id="S1.E3.m2" className="ltx_Math" alttext="\displaystyle\left(v_{x}\frac{\partial C(x,y,z,t)}{\partial x}+v_{y}\frac{%\partial C(x,y,z,t)}{\partial y}+v_{z}\frac{\partial C(x,y,z,t)}{\partial z}\right)" display="inline"><mrow><mo>(</mo><mrow><mrow><msub><mi>v</mi><mi>x</mi></msub><mo>⁢</mo><mstyle displaystyle="true"><mfrac><mrow><mo rspace="0em">∂</mo><mrow><mi>C</mi><mo>⁢</mo><mrow><mo stretchy="false">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy="false">)</mo></mrow></mrow></mrow><mrow><mo rspace="0em">∂</mo><mi>x</mi></mrow></mfrac></mstyle></mrow><mo>+</mo><mrow><msub><mi>v</mi><mi>y</mi></msub><mo>⁢</mo><mstyle displaystyle="true"><mfrac><mrow><mo rspace="0em">∂</mo><mrow><mi>C</mi><mo>⁢</mo><mrow><mo stretchy="false">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy="false">)</mo></mrow></mrow></mrow><mrow><mo rspace="0em">∂</mo><mi>y</mi></mrow></mfrac></mstyle></mrow><mo>+</mo><mrow><msub><mi>v</mi><mi>z</mi></msub><mo>⁢</mo><mstyle displaystyle="true"><mfrac><mrow><mo rspace="0em">∂</mo><mrow><mi>C</mi><mo>⁢</mo><mrow><mo stretchy="false">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy="false">)</mo></mrow></mrow></mrow><mrow><mo rspace="0em">∂</mo><mi>z</mi></mrow></mfrac></mstyle></mrow></mrow><mo>)</mo></mrow></math></td>
                  <td className="ltx_eqn_cell ltx_eqn_center_padright"></td>
                  <td rowSpan="1" className="ltx_eqn_cell ltx_eqn_eqno ltx_align_middle ltx_align_right"><span className="ltx_tag ltx_tag_equation ltx_align_right">(3)</span></td>
                </tr></tbody>
                <tbody id="S1.E4"><tr className="ltx_equation ltx_eqn_row ltx_align_baseline">
                  <td className="ltx_eqn_cell ltx_eqn_center_padleft"></td>
                  <td className="ltx_td ltx_eqn_cell"></td>
                  <td className="ltx_td ltx_align_center ltx_eqn_cell"><math id="S1.E4.m1" className="ltx_Math" alttext="\displaystyle+" display="inline"><mo>+</mo></math></td>
                  <td className="ltx_td ltx_align_left ltx_eqn_cell"><math id="S1.E4.m2" className="ltx_Math" alttext="\displaystyle{\cal R}(x,y,z,t)" display="inline"><mrow><mi className="ltx_font_mathcaligraphic">ℛ</mi><mo>⁢</mo><mrow><mo stretchy="false">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy="false">)</mo></mrow></mrow></math></td>
                  <td className="ltx_eqn_cell ltx_eqn_center_padright"></td>
                  <td rowSpan="1" className="ltx_eqn_cell ltx_eqn_eqno ltx_align_middle ltx_align_right"><span className="ltx_tag ltx_tag_equation ltx_align_right">(4)</span></td>
                </tr></tbody>
              </table>
            </div>
            <div>
              <p className="ltx_p">where</p>

              <ul id="S1.I1" className="ltx_itemize pl-4" >
                <li id="S1.I1.i1" className="ltx_item" style={{ listStyleType: "none" }}>
                  <span className="ltx_tag ltx_tag_item">•</span>
                  <div id="S1.I1.i1.p1" className="ltx_para">
                    <p className="ltx_p"><math id="S1.I1.i1.p1.m1" className="ltx_Math" alttext="C(x,y,z,t)" display="inline"><mrow><mi>C</mi><mo>⁢</mo><mrow><mo stretchy="false">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy="false">)</mo></mrow></mrow></math>: the pollution concentration at location <math id="S1.I1.i1.p1.m2" className="ltx_Math" alttext="(x,y,z)" display="inline"><mrow><mo stretchy="false">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy="false">)</mo></mrow></math> and time <math id="S1.I1.i1.p1.m3" className="ltx_Math" alttext="t" display="inline"><mi>t</mi></math>,</p>
                  </div>
                </li>

                <li id="S1.I1.i2" className="ltx_item" style={{ listStyleType: "none" }}>
                  <span className="ltx_tag ltx_tag_item">•</span>
                  <div id="S1.I1.i2.p1" className="ltx_para">
                    <p className="ltx_p"><math id="S1.I1.i2.p1.m1" className="ltx_Math" alttext="D_{x},\ D_{y},\ D_{z}" display="inline"><mrow><msub><mi>D</mi><mi>x</mi></msub><mo rspace="0.667em">,</mo><msub><mi>D</mi><mi>y</mi></msub><mo rspace="0.667em">,</mo><msub><mi>D</mi><mi>z</mi></msub></mrow></math>: the horizontal and vertical components of diffusion coefficient. For an anisotropic medium, like rivers and lakes, <math id="S1.I1.i2.p1.m2" className="ltx_Math" alttext="D_{x},\ D_{y},D_{z}" display="inline"><mrow><msub><mi>D</mi><mi>x</mi></msub><mo rspace="0.667em">,</mo><msub><mi>D</mi><mi>y</mi></msub><mo>,</mo><msub><mi>D</mi><mi>z</mi></msub></mrow></math> are unequal, while for an isotropic medium, the diffusion proceeds at the same rate in horizontal and vertical directions,</p>
                  </div>
                </li>
                <li id="S1.I1.i3" className="ltx_item" style={{ listStyleType: "none" }}>
                  <span className="ltx_tag ltx_tag_item">•</span>
                  <div id="S1.I1.i3.p1" className="ltx_para">
                    <p className="ltx_p"><math id="S1.I1.i3.p1.m1" className="ltx_Math" alttext="v_{x},\ v_{y},\ v_{z}" display="inline"><mrow><msub><mi>v</mi><mi>x</mi></msub><mo rspace="0.667em">,</mo><msub><mi>v</mi><mi>y</mi></msub><mo rspace="0.667em">,</mo><msub><mi>v</mi><mi>z</mi></msub></mrow></math>: the flow velocity components in the <math id="S1.I1.i3.p1.m2" className="ltx_Math" alttext="x" display="inline"><mi>x</mi></math>, <math id="S1.I1.i3.p1.m3" className="ltx_Math" alttext="y" display="inline"><mi>y</mi></math>, and <math id="S1.I1.i3.p1.m4" className="ltx_Math" alttext="z" display="inline"><mi>z</mi></math> directions. They are constant in each spatial direction for the studied contaminated region,</p>
                  </div>
                </li>
                <li id="S1.I1.i4" className="ltx_item" style={{ listStyleType: "none" }}>
                  <span className="ltx_tag ltx_tag_item">•</span>
                  <div id="S1.I1.i4.p1" className="ltx_para">
                    <p className="ltx_p"><math id="S1.I1.i4.p1.m1" className="ltx_Math" alttext="{\cal R}(x,y,z,t)" display="inline"><mrow><mi className="ltx_font_mathcaligraphic">ℛ</mi><mo>⁢</mo><mrow><mo stretchy="false">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy="false">)</mo></mrow></mrow></math>: the pollution emission at location <math id="S1.I1.i4.p1.m2" className="ltx_Math" alttext="(x,y,z)" display="inline"><mrow><mo stretchy="false">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy="false">)</mo></mrow></math> and time <math id="S1.I1.i4.p1.m3" className="ltx_Math" alttext="t" display="inline"><mi>t</mi></math>.</p>
                  </div>
                </li>

              </ul>
            </div>
          </div>
          {/*  */}
          <div id="S1.p2" className="ltx_para">
            <div className={"my-2 p-4 leading-6"} >
              <div className={"mb-6"} >
                <p className="ltx_p">Considering the boundary conditions, the pollution concentration must converge to zero as <math id="S1.p2.m1" className="ltx_Math" alttext="x" display="inline"><mi>x</mi></math>, <math id="S1.p2.m2" className="ltx_Math" alttext="y" display="inline"><mi>y</mi></math>, or <math id="S1.p2.m3" className="ltx_Math" alttext="z" display="inline"><mi>z</mi></math> tends to infinity</p>
              </div>

              <table id="A2.EGx2" className="ltx_equationgroup ltx_eqn_eqnarray ltx_eqn_table">

                <tbody id="S1.E5"><tr className="ltx_equation ltx_eqn_row ltx_align_baseline">
                  <td className="ltx_eqn_cell ltx_eqn_center_padleft"></td>
                  <td className="ltx_td ltx_align_right ltx_eqn_cell"><math id="S1.E5.m1" className="ltx_Math" alttext="\displaystyle\lim_{x\to\pm\infty}C(x,y,z,t)\rightarrow 0," display="inline"><mrow><mrow><mrow><munder><mo movablelimits="false">lim</mo><mrow><mi>x</mi><mo stretchy="false">→</mo><mrow><mo>±</mo><mi mathvariant="normal">∞</mi></mrow></mrow></munder><mrow><mi>C</mi><mo>⁢</mo><mrow><mo stretchy="false">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy="false">)</mo></mrow></mrow></mrow><mo stretchy="false">→</mo><mn>0</mn></mrow><mo>,</mo></mrow></math></td>
                  <td className="ltx_eqn_cell ltx_eqn_center_padright"></td>
                  <td rowSpan="1" className="ltx_eqn_cell ltx_eqn_eqno ltx_align_middle ltx_align_right"><span className="ltx_tag ltx_tag_equation ltx_align_right">(5)</span></td>
                </tr></tbody>
                <tbody id="S1.E6"><tr className="ltx_equation ltx_eqn_row ltx_align_baseline">
                  <td className="ltx_eqn_cell ltx_eqn_center_padleft"></td>
                  <td className="ltx_td ltx_align_right ltx_eqn_cell"><math id="S1.E6.m1" className="ltx_Math" alttext="\displaystyle\lim_{y\to\pm\infty}C(x,y,z,t)\rightarrow 0," display="inline"><mrow><mrow><mrow><munder><mo movablelimits="false">lim</mo><mrow><mi>y</mi><mo stretchy="false">→</mo><mrow><mo>±</mo><mi mathvariant="normal">∞</mi></mrow></mrow></munder><mrow><mi>C</mi><mo>⁢</mo><mrow><mo stretchy="false">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy="false">)</mo></mrow></mrow></mrow><mo stretchy="false">→</mo><mn>0</mn></mrow><mo>,</mo></mrow></math></td>
                  <td className="ltx_eqn_cell ltx_eqn_center_padright"></td>
                  <td rowSpan="1" className="ltx_eqn_cell ltx_eqn_eqno ltx_align_middle ltx_align_right"><span className="ltx_tag ltx_tag_equation ltx_align_right">(6)</span></td>
                </tr></tbody>
                <tbody id="S1.E7"><tr className="ltx_equation ltx_eqn_row ltx_align_baseline">
                  <td className="ltx_eqn_cell ltx_eqn_center_padleft"></td>
                  <td className="ltx_td ltx_align_right ltx_eqn_cell"><math id="S1.E7.m1" className="ltx_Math" alttext="\displaystyle\lim_{z\to\pm\infty}C(x,y,z,t)\rightarrow 0;" display="inline"><mrow><mrow><mrow><munder><mo movablelimits="false">lim</mo><mrow><mi>z</mi><mo stretchy="false">→</mo><mrow><mo>±</mo><mi mathvariant="normal">∞</mi></mrow></mrow></munder><mrow><mi>C</mi><mo>⁢</mo><mrow><mo stretchy="false">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy="false">)</mo></mrow></mrow></mrow><mo stretchy="false">→</mo><mn>0</mn></mrow><mo>;</mo></mrow></math></td>
                  <td className="ltx_eqn_cell ltx_eqn_center_padright"></td>
                  <td rowSpan="1" className="ltx_eqn_cell ltx_eqn_eqno ltx_align_middle ltx_align_right"><span className="ltx_tag ltx_tag_equation ltx_align_right">(7)</span></td>
                </tr></tbody>
              </table>
              <div className={"mb-6"} >
                <p className="ltx_p">and the initial condition,</p>
              </div>

              <table id="A2.EGx3" className="ltx_equationgroup ltx_eqn_eqnarray ltx_eqn_table">

                <tbody id="S1.E8"><tr className="ltx_equation ltx_eqn_row ltx_align_baseline">
                  <td className="ltx_eqn_cell ltx_eqn_center_padleft"></td>
                  <td className="ltx_td ltx_align_right ltx_eqn_cell"><math id="S1.E8.m1" className="ltx_Math" alttext="\displaystyle C(x,y,z,t=0)=M\ \delta(x-x_{0})\ \delta(y-y_{0})\ \delta(z-z_{0})," display="inline"><mrow><mrow><mrow><mi>C</mi><mo>⁢</mo><mrow><mo stretchy="false">(</mo><mrow><mrow><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi></mrow><mo>=</mo><mn>0</mn></mrow><mo stretchy="false">)</mo></mrow></mrow><mo>=</mo><mrow><mi>M</mi><mo lspace="0.500em">⁢</mo><mi>δ</mi><mo>⁢</mo><mrow><mo stretchy="false">(</mo><mrow><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub></mrow><mo stretchy="false">)</mo></mrow><mo lspace="0.500em">⁢</mo><mi>δ</mi><mo>⁢</mo><mrow><mo stretchy="false">(</mo><mrow><mi>y</mi><mo>−</mo><msub><mi>y</mi><mn>0</mn></msub></mrow><mo stretchy="false">)</mo></mrow><mo lspace="0.500em">⁢</mo><mi>δ</mi><mo>⁢</mo><mrow><mo stretchy="false">(</mo><mrow><mi>z</mi><mo>−</mo><msub><mi>z</mi><mn>0</mn></msub></mrow><mo stretchy="false">)</mo></mrow></mrow></mrow><mo>,</mo></mrow></math></td>
                  <td className="ltx_eqn_cell ltx_eqn_center_padright"></td>
                  <td rowSpan="1" className="ltx_eqn_cell ltx_eqn_eqno ltx_align_middle ltx_align_right"><span className="ltx_tag ltx_tag_equation ltx_align_right">(8)</span></td>
                </tr></tbody>
              </table>
            </div>

            <div className={"my-2 p-4 leading-6"} >
              <div className={"mb-6"}  >
                <p className="ltx_p">where <math id="S1.p2.m4" className="ltx_Math" alttext="M" display="inline"><mi>M</mi></math> is the released point-source pollution at location <math id="S1.p2.m5" className="ltx_Math" alttext="(x_{0},y_{0},z_{0})" display="inline"><mrow><mo stretchy="false">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo>,</mo><msub><mi>z</mi><mn>0</mn></msub><mo stretchy="false">)</mo></mrow></math> and time <math id="S1.p2.m6" className="ltx_Math" alttext="t=0" display="inline"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>. In a 1D model in <math id="S1.p2.m7" className="ltx_Math" alttext="x-" display="inline"><mrow><mi>x</mi><mo>−</mo></mrow></math>direction, <math id="S1.p2.m8" className="ltx_Math" alttext="M\equiv\frac{M}{L_{y}\cdot L_{z}}" display="inline"><mrow><mi>M</mi><mo>≡</mo><mfrac><mi>M</mi><mrow><msub><mi>L</mi><mi>y</mi></msub><mo lspace="0.222em" rspace="0.222em">⋅</mo><msub><mi>L</mi><mi>z</mi></msub></mrow></mfrac></mrow></math> represents the surface mass flux or total mass per unit area, where <math id="S1.p2.m9" className="ltx_Math" alttext="L_{y}\cdot L_{z}" display="inline"><mrow><msub><mi>L</mi><mi>y</mi></msub><mo lspace="0.222em" rspace="0.222em">⋅</mo><msub><mi>L</mi><mi>z</mi></msub></mrow></math> is the area scale of neglected dimensions. Similarly, in a 2D model in the <math id="S1.p2.m10" className="ltx_Math" alttext="x-y" display="inline"><mrow><mi>x</mi><mo>−</mo><mi>y</mi></mrow></math> direction, <math id="S1.p2.m11" className="ltx_Math" alttext="M\equiv\frac{M}{L_{z}}" display="inline"><mrow><mi>M</mi><mo>≡</mo><mfrac><mi>M</mi><msub><mi>L</mi><mi>z</mi></msub></mfrac></mrow></math> represents linear mass flux or total mass per unit length, where <math id="S1.p2.m12" className="ltx_Math" alttext="L_{z}" display="inline"><msub><mi>L</mi><mi>z</mi></msub></math> is the area scale of neglected dimension.
                  The total mass of pollution at time <math id="S1.p2.m13" className="ltx_Math" alttext="t" display="inline"><mi>t</mi></math> must be equal to the number of undecayed pollution at time <math id="S1.p2.m14" className="ltx_Math" alttext="t" display="inline"><mi>t</mi></math>, i.e. <math id="S1.p2.m15" className="ltx_Math" alttext="M(t)" display="inline"><mrow><mi>M</mi><mo>⁢</mo><mrow><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo></mrow></mrow></math>. So, the boundary and initial conditions are</p>
              </div>

              <table id="S1.E9" className="ltx_equation ltx_eqn_table">

                <tbody><tr className="ltx_equation ltx_eqn_row ltx_align_baseline">
                  <td className="ltx_eqn_cell ltx_eqn_center_padleft"></td>
                  {/* <td className="ltx_eqn_cell ltx_align_center"><math id="S1.E9.m1" className="ltx_Math" alttext="\int_{{\ooalign{\hfil$V$\hfil\cr\kern 0.56001pt--\hfil\cr}}}d{\ooalign{\hfil$V%$\hfil\cr\kern 0.80002pt--\hfil\cr}}\,C(x,y,z,t)=M(t)." display="block"><mrow><mrow><mrow><msub><mo>∫</mo><mtable rowspacing="0pt"><mtr><mtd className="ltx_nopad_l ltx_nopad_r"><mi>V</mi><mrow></mrow></mtd></mtr><mtr><mtd className="ltx_nopad_l ltx_nopad_r" columnalign="left"><mtext>–</mtext></mtd></mtr></mtable></msub><mrow><mrow><mo lspace="0.167em" rspace="0em">𝑑</mo><mtable displaystyle="true" rowspacing="0pt"><mtr><mtd className="ltx_nopad_l ltx_nopad_r"><mi>V</mi><mrow></mrow></mtd></mtr><mtr><mtd className="ltx_nopad_l ltx_nopad_r" columnalign="left"><mtext>–</mtext></mtd></mtr></mtable></mrow><mo lspace="0.170em">⁢</mo><mi>C</mi><mo>⁢</mo><mrow><mo stretchy="false">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy="false">)</mo></mrow></mrow></mrow><mo>=</mo><mrow><mi>M</mi><mo>⁢</mo><mrow><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo></mrow></mrow></mrow><mo lspace="0em">.</mo></mrow></math></td> */}
                  <td className="ltx_eqn_cell ltx_align_center"><math id="S1.E9.m1" className="ltx_Math" alttext="\int_{{v}d{v}}\,C(x,y,z,t)=M(t)." display="block"><mrow><mrow><mrow><msub><mo>∫</mo><mtable rowspacing="0pt"><mtr><mtd className="ltx_nopad_l ltx_nopad_r"><mi>V</mi><mrow></mrow></mtd></mtr><mtr><mtd className="ltx_nopad_l ltx_nopad_r" columnalign="left"><mtext></mtext></mtd></mtr></mtable></msub><mrow><mrow><mo lspace="0.167em" rspace="0em">𝑑</mo><mtable displaystyle="true" rowspacing="0pt"><mtr><mtd className="ltx_nopad_l ltx_nopad_r"><mi>V</mi><mrow></mrow></mtd></mtr><mtr><mtd className="ltx_nopad_l ltx_nopad_r" columnalign="left"></mtd></mtr></mtable></mrow><mo lspace="0.170em">⁢</mo><mi>C</mi><mo>⁢</mo><mrow><mo stretchy="false">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy="false">)</mo></mrow></mrow></mrow><mo>=</mo><mrow><mi>M</mi><mo>⁢</mo><mrow><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo></mrow></mrow></mrow><mo lspace="0em">.</mo></mrow></math></td>
                  <td className="ltx_eqn_cell ltx_eqn_center_padright"></td>
                  <td rowSpan="1" className="ltx_eqn_cell ltx_eqn_eqno ltx_align_middle ltx_align_right"><span className="ltx_tag ltx_tag_equation ltx_align_right">(9)</span></td>
                </tr></tbody>
              </table>
            </div>

            <div className={"my-2 p-4 leading-6 "}>
              <div className={"mb-6"} >
                <p className="ltx_p">If the source of the contamination is radioactive material, the mass of undecayed material at time <math id="S1.p2.m16" className="ltx_Math" alttext="t" display="inline"><mi>t</mi></math> is given by the radioactive decay law</p>
              </div>

              <table id="S1.E10" className="ltx_equation ltx_eqn_table">

                <tbody><tr className="ltx_equation ltx_eqn_row ltx_align_baseline">
                  <td className="ltx_eqn_cell ltx_eqn_center_padleft"></td>
                  <td className="ltx_eqn_cell ltx_align_center"><math id="S1.E10.m1" className="ltx_Math" alttext="M(t)=M_{0}\,e^{-\lambda\,t}," display="block"><mrow><mrow><mrow><mi>M</mi><mo>⁢</mo><mrow><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo></mrow></mrow><mo>=</mo><mrow><msub><mi>M</mi><mn>0</mn></msub><mo>⁢</mo><msup><mi>e</mi><mrow><mo>−</mo><mrow><mi>λ</mi><mo lspace="0.170em">⁢</mo><mi>t</mi></mrow></mrow></msup></mrow></mrow><mo>,</mo></mrow></math></td>
                  <td className="ltx_eqn_cell ltx_eqn_center_padright"></td>
                  <td rowSpan="1" className="ltx_eqn_cell ltx_eqn_eqno ltx_align_middle ltx_align_right"><span className="ltx_tag ltx_tag_equation ltx_align_right">(10)</span></td>
                </tr></tbody>
              </table>
            </div>

            <div className={"my-2 p-4 leading-6 mb-6 "} >

              <div className={"mb-6"} >
                <p className="ltx_p">where <math id="S1.p2.m17" className="ltx_Math" alttext="\lambda=\frac{\ln(2)}{T_{1/2}}" display="inline"><mrow><mi>λ</mi><mo>=</mo><mfrac><mrow><mi>ln</mi><mo>⁡</mo><mrow><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></mrow><msub><mi>T</mi><mrow><mn>1</mn><mo>/</mo><mn>2</mn></mrow></msub></mfrac></mrow></math> is the decay constant for the induced radioactive material.
                  For an instantaneous point-source pollution</p>
              </div>

              <table id="A2.EGx4" className="ltx_equationgroup ltx_eqn_eqnarray ltx_eqn_table">

                <tbody id="S1.E11"><tr className="ltx_equation ltx_eqn_row ltx_align_baseline">
                  <td className="ltx_eqn_cell ltx_eqn_center_padleft"></td>
                  <td className="ltx_td ltx_align_right ltx_eqn_cell"><math id="S1.E11.m1" className="ltx_Math" alttext="\displaystyle C(x,y,z,t)" display="inline"><mrow><mi>C</mi><mo>⁢</mo><mrow><mo stretchy="false">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy="false">)</mo></mrow></mrow></math></td>
                  <td className="ltx_td ltx_align_center ltx_eqn_cell"><math id="S1.E11.m2" className="ltx_Math" alttext="\displaystyle=" display="inline"><mo>=</mo></math></td>
                  <td className="ltx_td ltx_align_left ltx_eqn_cell"><math id="S1.E11.m3" className="ltx_Math" alttext="\displaystyle\frac{M_{0}}{(4\pi t)^{3/2}(D_{x}D_{y}D_{z})^{1/2}}" display="inline"><mstyle displaystyle="true"><mfrac><msub><mi>M</mi><mn>0</mn></msub><mrow><msup><mrow><mo stretchy="false">(</mo><mrow><mn>4</mn><mo>⁢</mo><mi>π</mi><mo>⁢</mo><mi>t</mi></mrow><mo stretchy="false">)</mo></mrow><mrow><mn>3</mn><mo>/</mo><mn>2</mn></mrow></msup><mo>⁢</mo><msup><mrow><mo stretchy="false">(</mo><mrow><msub><mi>D</mi><mi>x</mi></msub><mo>⁢</mo><msub><mi>D</mi><mi>y</mi></msub><mo>⁢</mo><msub><mi>D</mi><mi>z</mi></msub></mrow><mo stretchy="false">)</mo></mrow><mrow><mn>1</mn><mo>/</mo><mn>2</mn></mrow></msup></mrow></mfrac></mstyle></math></td>
                  <td className="ltx_eqn_cell ltx_eqn_center_padright"></td>
                  <td rowSpan="1" className="ltx_eqn_cell ltx_eqn_eqno ltx_align_middle ltx_align_right"><span className="ltx_tag ltx_tag_equation ltx_align_right">(11)</span></td>
                </tr></tbody>
                <tbody id="S1.E12"><tr className="ltx_equation ltx_eqn_row ltx_align_baseline">
                  <td className="ltx_eqn_cell ltx_eqn_center_padleft"></td>
                  <td className="ltx_td ltx_eqn_cell"></td>
                  <td className="ltx_td ltx_align_center ltx_eqn_cell"><math id="S1.E12.m1" className="ltx_Math" alttext="\displaystyle\times" display="inline"><mo>×</mo></math></td>
                  <td className="ltx_td ltx_align_left ltx_eqn_cell"><math id="S1.E12.m2" className="ltx_Math" alttext="\displaystyle\exp{\left(-\frac{(x-x_{0}-v_{x}t)^{2}}{4D_{x}t}-\frac{(y-y_{0}-v%_{y}t)^{2}}{4D_{y}t}-\frac{(z-z_{0}-v_{z}t)^{2}}{4D_{z}t}-\frac{\ln(2)}{T_{1/2%}}\,t\right)}." display="inline"><mrow><mrow><mi>exp</mi><mo>⁡</mo><mrow><mo>(</mo><mrow><mrow><mo>−</mo><mstyle displaystyle="true"><mfrac><msup><mrow><mo stretchy="false">(</mo><mrow><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo>−</mo><mrow><msub><mi>v</mi><mi>x</mi></msub><mo>⁢</mo><mi>t</mi></mrow></mrow><mo stretchy="false">)</mo></mrow><mn>2</mn></msup><mrow><mn>4</mn><mo>⁢</mo><msub><mi>D</mi><mi>x</mi></msub><mo>⁢</mo><mi>t</mi></mrow></mfrac></mstyle></mrow><mo>−</mo><mstyle displaystyle="true"><mfrac><msup><mrow><mo stretchy="false">(</mo><mrow><mi>y</mi><mo>−</mo><msub><mi>y</mi><mn>0</mn></msub><mo>−</mo><mrow><msub><mi>v</mi><mi>y</mi></msub><mo>⁢</mo><mi>t</mi></mrow></mrow><mo stretchy="false">)</mo></mrow><mn>2</mn></msup><mrow><mn>4</mn><mo>⁢</mo><msub><mi>D</mi><mi>y</mi></msub><mo>⁢</mo><mi>t</mi></mrow></mfrac></mstyle><mo>−</mo><mstyle displaystyle="true"><mfrac><msup><mrow><mo stretchy="false">(</mo><mrow><mi>z</mi><mo>−</mo><msub><mi>z</mi><mn>0</mn></msub><mo>−</mo><mrow><msub><mi>v</mi><mi>z</mi></msub><mo>⁢</mo><mi>t</mi></mrow></mrow><mo stretchy="false">)</mo></mrow><mn>2</mn></msup><mrow><mn>4</mn><mo>⁢</mo><msub><mi>D</mi><mi>z</mi></msub><mo>⁢</mo><mi>t</mi></mrow></mfrac></mstyle><mo>−</mo><mrow><mstyle displaystyle="true"><mfrac><mrow><mi>ln</mi><mo>⁡</mo><mrow><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></mrow><msub><mi>T</mi><mrow><mn>1</mn><mo>/</mo><mn>2</mn></mrow></msub></mfrac></mstyle><mo lspace="0.170em">⁢</mo><mi>t</mi></mrow></mrow><mo>)</mo></mrow></mrow><mo lspace="0em">.</mo></mrow></math></td>
                  <td className="ltx_eqn_cell ltx_eqn_center_padright"></td>
                  <td rowSpan="1" className="ltx_eqn_cell ltx_eqn_eqno ltx_align_middle ltx_align_right"><span className="ltx_tag ltx_tag_equation ltx_align_right">(12)</span></td>
                </tr></tbody>
              </table>
            </div>

          </div>

        </section>

        <section className="results-section" id="simulations" >
          <p className="section-kicker">Computational toolkit</p>
          <h2>Numerical results</h2>

          <p className={"py-4"} >
            To study the pollution diffusion from a radioactive source in a river or lake, we develop
            a computational toolkit in Matlab to solve the transport equation and calculate pollution
            concentration as a function of time at different locations.
          </p>

          <div>
            {/* 1D */}
            <article className="simulation-card" >
              <div className="dimension-badge">1D</div>
              <h3>{"Instantaneous release in a one-dimensional stream"}</h3>
              <div className="flex flex-col items-center justify-center rounded-lg flex-1" >
                <Image src={photo_0} alt="One-dimensional flowing-water model" className="result-image result-image-narrow" />
              </div>
              <div className=" flex flex-col items-center justify-center rounded-lg flex-1 " >
                <p className="" >
                  For the first implementation, we study the diffusion of radioactive pollution from an
                  instantaneous release in a 1D water canal flowing at a constant speed. In the image above, we show
                  the pollution release in a one-dimensional water canal flowing in the x direction with a
                  constant speed v<sub>x</sub>. The Matlab scripts listed in Appendix A, create 2D motion plots (in
                  AVI and GIF formats) for the evolution of pollution concentration.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg flex-1" >
                <Image src={photo_1D} alt="Time evolution of one-dimensional pollution concentration" className="result-image" />
              </div>
              <div className=" flex flex-col items-center justify-center rounded-lg flex-1 " >
                <p className="mb-4" >
                  FIG. 2: Few screenshots of 2D motion plots obtained from the Matlab toolkit that
                  calculates the pollution diffusion obtained from instantaneous release from radioactive
                  neutron source 16N (with a half-life T<sub>1/2</sub> = 7.13 s) as a function of time t and distance x, in
                  a water canal flowing with a constant speed v<sub>x</sub> = 0.3 m/s and a diffusion coefficient
                </p>
                <Image src={gif_1D} alt="Animated one-dimensional pollution transport simulation" className="result-animation" unoptimized />
              </div>

              <div className="code-link" >
                <a target="_blank" rel="noreferrer" href={"https://github.com/CSU-Physics/Transport-Equation/tree/master/Matlab%20Code/1D"} ><FaGithub /> Open 1D MATLAB files</a>
                {/* <a target="blank" className=" to-blue-300" href={props.link2} >XmGrace file: BE_A.agr</a> */}
              </div>
            </article>
          </div>

          <div>
            {/* 2D */}
            <article className="simulation-card" >
              <div className="dimension-badge">2D</div>
              <h3>{"Instantaneous release in a two-dimensional stream"}</h3>

              <div className=" flex flex-col items-center justify-center rounded-lg flex-1 " >
                <p className="" >
                  In this section, we study the diffusion of radioactive pollution from an instantaneous
                  release in a 2D water stream flowing at constant speeds v<sub>x</sub> and v<sub>y</sub> in the x and y directions.
                  The Matlab scripts listed in Appendix B, create 2D motion plots (in AVI and GIF formats)
                  for the evolution of pollution concentration from a release at point ( x<sub>0</sub>, y<sub>0</sub>).
                </p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg flex-1" >
                <Image src={photo_2D} alt="Snapshots of two-dimensional pollution concentration" className="result-image" />
              </div>
              <div className=" flex flex-col items-center justify-center rounded-lg flex-1 " >
                <p className="mb-4" >
                  FIG. 3: Few screenshots of 2D motion plots obtained from the Matlab toolkit that calculates
                  the pollution diffusion obtained from instantaneous release from radioactive neutron source
                  16N (with a half-life T<sub>1/2</sub> = 7.13 s) at (x<sub>0</sub> = 0 m, y<sub>0</sub> = 0.5 m) as a function of time t
                  and distances x and y, in a water river flowing with a constant speeds  v<sub>x</sub> = 0.3 m/s and
                  v<sub>y</sub> = 0.0 m/s and diffusion coefficients D<sub>x</sub> = D<sub>y</sub> = 0.001.
                </p>
                {/* <Image src={props.photo2} className="ml-2 rounded-lg h-[300px] w-[350px] lg:h-[350px] md:w-[500px]" /> */}
                <Image src={gif_2D} alt="Animated two-dimensional pollution transport simulation" className="result-animation" unoptimized />
              </div>

              <div className="code-link" >
                <a target="_blank" rel="noreferrer" href={"https://github.com/CSU-Physics/Transport-Equation/tree/master/Matlab%20Code/2D"} ><FaGithub /> Open 2D MATLAB files</a>
                {/* <a target="blank" className=" to-blue-300" href={props.link2} >XmGrace file: BE_A.agr</a> */}
              </div>
            </article>
          </div>

          <div>
            {/* 3D */}
            <article className="simulation-card" >
              <div className="dimension-badge">3D</div>
              <h3>{"Instantaneous release in a three-dimensional stream"}</h3>
              <div className=" flex flex-col items-center justify-center rounded-lg flex-1 " >
                <p className="" >
                  In this section, we study the diffusion of radioactive pollution from an instantaneous
                  release in a 3D water stream flowing at constant speeds v<sub>x</sub>, v<sub>y</sub>, and v<sub>z</sub> in the x, y, and z directions.
                  The Matlab scripts listed in Appendix B, create 3D motion plots (in AVI and GIF formats)
                  for the evolution of pollution concentration from a release at point (x<sub>0</sub>, y<sub>0</sub>, z<sub>0</sub>).
                </p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg flex-1" >
                <Image src={photo_3D} alt="Snapshots of three-dimensional pollution concentration" className="result-image" />
              </div>
              <div className=" flex flex-col items-center justify-center rounded-lg flex-1 " >
                <p className="mb-4" >
                  FIG. 3: Few screenshots of 3D motion plots obtained from the Matlab toolkit that calculates
                  the pollution diffusion obtained from instantaneous release from radioactive neutron source
                  16N (with a half-life T<sub>1/2</sub> = 7.13 s) at (x<sub>0</sub>, y<sub>0</sub>, z<sub>0</sub>) as a function of time t
                  and distances x and y, in a water river flowing with a constant speeds v<sub>x</sub> = 0.3 m/s,
                  v<sub>y</sub> = 0.2  m/s, and v<sub>z</sub> = 0.1 m/s and diffusion coefficients D<sub>x</sub> = 0.001 D<sub>y</sub> = D<sub>z</sub> = 0.01.
                </p>
                <Image src={gif_3D} alt="Animated three-dimensional pollution transport simulation" className="result-animation" unoptimized />
              </div>
              <div className="code-link" >
                <a target="_blank" rel="noreferrer" href={"https://github.com/CSU-Physics/Transport-Equation/tree/master/Matlab%20Code/3D"} ><FaGithub /> Open 3D MATLAB files</a>
                {/* <a target="blank" className=" to-blue-300" href={props.link2} >XmGrace file: BE_A.agr</a> */}
              </div>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-intro">
            <p className="section-kicker section-kicker-light">Contact</p>
            <h2>Interested in educational or research collaboration?</h2>
            <p>I welcome inquiries about educational and research collaborations of any kind, including joint projects, computational methods, classroom applications, and opportunities to extend these open resources.</p>
          </div>
          <address className="contact-card">
            <div className="contact-avatar" aria-hidden="true">MH</div>
            <div className="contact-card-copy">
            <p className="contact-name">Dr. Mohammadreza Hadizadeh</p>
            <p className="contact-title">Professor of Physics</p>
            <p className="contact-affiliation">College of Engineering, Science, Technology and Agriculture<br />Central State University</p>
            <dl className="contact-details">
              <div><dt>O</dt><dd><a href="tel:+19373766273">937 376-6273</a></dd></div>
              <div><dt>E</dt><dd><a href="mailto:mhadizadeh@centralstate.edu">mhadizadeh@centralstate.edu</a></dd></div>
              <div><dt>W</dt><dd><a href="https://people.ohio.edu/hadizadm/" target="_blank" rel="noopener noreferrer">https://people.ohio.edu/hadizadm/ <span aria-hidden="true">↗</span></a></dd></div>
            </dl>
          </div>
          </address>
        </section>
      </div>
      <footer><span>Transport Equation Project</span><span>Central State University Physics</span></footer>
    </main>
  );
}
