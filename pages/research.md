---
layout: default
title: Research
permalink: /research/
---

# Research
Descriptions of current research projects and ongoing research interests.
<br>An extended list of past significant research projects can be found on my <a href="http://www.catherineslaughter.space/projects/">projects</a> page.

## Interests
In general, my research interests are in small things--on an astrophysical scale, that is. Star clusters, stars, planets, moons, dust, gas, etc. In this context, I have two general themes of interest. The first is what I tend to call "weird" stars/stellar systems. In this, I am curious about stars that differ in some way from our typical understanding of stellar processes. This includes (but is far from limited to) transient events that cannot be modeled 1-dimensionally, complicated orbital physics and complicated system (planetary and/or multistellar) co-evolution, RR Lyrae stars, very metal poor stars, ULXs, high-energy binary systems, late-stage evolutionary phases, etc. Secondly, I am thematically interested in the way(s) small things can impact big things in the Universe. This includes topics like astrochemistry, nucleosynthesis (Big-Bang, stellar, or otherwise), and long-term evolution of stellar populations and their impact on galaxy formation. In this realm, I am especially interested in the formation and evolution of Pop. III stars in the early universe, and how we may go about observing such stars today (I'm currently fascinated by the gravitational lensing observation of Earendel).

As for research methodology, I would generally consider myself interested in observational astronomy with computational applications, or vice-versa. This includes using new algorithmic methods to better analyze observational data, modeling systems for comparison with observational data, etc. I am also very much intrigued by instrumentation but am admittedly not much of an engineer.

(Are you a professor with related research interests looking to expand your research group in the next application cycle? I would be honored to work with you!)

## First-Year Master's Research
My first-year research project for my Master's was conducted under the guidance of Prof. Xander Tielens and Dr. Cornelia Pabst at Sterrewacht Leiden. Inspired by the work of Dr. Bob O'Dell [(O'Dell et al. 2017)](https://ui.adsabs.harvard.edu/abs/2017ApJ...837..151O/abstract), I was studying velocity structures and bubbles in the Greateer Orion Nebula Region. I used SOFIA and Herschel data and a radiation field simulation code developed by Ramsey Karim at the University of Maryland to develop a new method for identifying regions of interest in the search for such velocity structures. By removing Theta 1 Ori C, the brightest star in the Trapezium cluster, from the simulated radiation field map and comparing to the complete map, I identified regions where local radiation dominated. I was able to conclude that this method was sucessful in identifying regions where these bubble structures exist. I found further evidence for the existence of a secondary bubble surrounding Theta 2 Ori A in the Veil region, as well as identifying a previously undiscussed fossil bubble structure around HD37150 in OMC A.

## Culminating Undergraduate Research
At Dartmouth, all my resarch lead up to my culminating undergraduate experience, advised by Prof. Brian Chaboyer. The Chaboyer Group at Dartmouth College focuses on research in stellar evolution. In particular, the group helps maintain and calibrate DSED evolution models, and uses the database to study stellar population formation of the Milky Way, satellite galaxies, globular clusters, etc.

The purpose of my project was to estimate the ages of several globular clusters in the Milky Way. These clusters contain the oldest stars in the galaxy, and determining the age of them provides a strict lower limit on the overall age of the universe. In order to do this, I am implementing a Monte-Carlo Main Sequence Fitting method using DSED models and Gaia parallax data, as done in <a href="https://iopscience.iop.org/article/10.3847/1538-4357/aa6574" target="_blank">O’Malley et al. 2017</a>, to find my age estimate. I can further reduce the error in this value using numerical analysis methods as outlined in  <a href="https://academic.oup.com/mnras/article/332/1/91/975077" target="_blank">Dolphin 2001</a>. This method looks at the number densities of stars in the cluster at certain places in their evolution. In particular, I’ll be looking at stars at and just beyond the main sequence turnoff, because evolution occurs much more quickly starting at this point. This project utilizes Gaia parallax distance data, and error can be further reduced with the release of Gaia DR3. 

The limit estimated will be useful in further research related to the Hubble Tension—a discrepancy in experimental findings which can estimate the age of the universe. The value for the age of the universe impacts what we know about cosmology going all the way back to the Big Bang, and is essential to the cosmological standard model. Because the distances to the clusters studied can be found via parallax, the value obtained in this project will not be impacted by potential error in the distance ladder. The lower limit estimated will serve as a useful boundary condition in studying the Hubble Tension.

