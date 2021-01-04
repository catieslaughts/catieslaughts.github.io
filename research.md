---
layout: default
title: Research
permalink: /research/
---

# Research
Descriptions of current research projects and ongoing research interests.
<br>An extended list of past significant research projects can be found on my <a href="http://www.catherineslaughter.space/projects/">projects</a> page.

## Senior Thesis
As of right now, my primary project is my undergraduate senior honors thesis, advised by Prof. Brian Chaboyer. The Chaboyer Group at Dartmouth College focuses on research in stellar evolution. In particular, the group helps maintain and calibrate DSED evolution models, and uses the database to study stellar population formation of the Milky Way, satellite galaxies, globular clusters, etc.

The purpose of my thesis is to estimate the ages of several globular clusters in the Milky Way. These clusters contain the oldest stars in the galaxy, and determining the age of them provides a strict lower limit on the overall age of the universe. In order to do this, I am implementing a Monte-Carlo Main Sequence Fitting method using DSED models and Gaia parallax data, as done in <a href="https://iopscience.iop.org/article/10.3847/1538-4357/aa6574">O’Malley et al. 2017</a>, to find my age estimate. I can further reduce the error in this value using numerical analysis methods as outlined in  <a href="https://academic.oup.com/mnras/article/332/1/91/975077">Dolphin 2001</a>. This method looks at the number densities of stars in the cluster at certain places in their evolution. In particular, I’ll be looking at stars at and just beyond the main sequence turnoff, because evolution occurs much more quickly starting at this point. This project utilizes Gaia parallax distance data, and error can be further reduced with the release of Gaia DR3. 

The limit estimated will be useful in further research related to the Hubble Tension—a discrepancy in experimental findings which can estimate the age of the universe. The value for the age of the universe impacts what we know about cosmology going all the way back to the Big Bang, and is essential to the cosmological standard model. Because the distances to the clusters studied can be found via parallax, the value obtained in this project will not be impacted by potential error in the distance ladder. The lower limit estimated will serve as a useful boundary condition in studying the Hubble Tension.

## Extended SURF Project
Additionally, I am presently working on a paper that is an extension of a Summer Undergraduate Research Fellowship (SURF) project I completed in the summer of 2020 with the NuSTAR group at Caltech. In particular, I am working under Dr. Brian Grefenstette, who leads a group of researchers studying and creating a formal <a href="https://bwgref.github.io/straycats/">catalog</a> of serendipitous straylight observations taken by NuSTAR in the 8+ years since its launch. These straylight data are a result of how the optics are mounted to the scope, and a more in-depth discussion of this straylight phenomenon can be found in <a href="https://www.spiedigitallibrary.org/journals/Journal-of-Astronomical-Telescopes-Instruments-and-Systems/volume-3/issue-04/044003/Observational-artifacts-of-Nuclear-Spectroscopic-Telescope-Array--ghost-rays/10.1117/1.JATIS.3.4.044003.full?SSO=1">Madsen et al. 2017</a>.

My project specifically serves to show the utility of these straylight data in astrophysics research. In particular, I am doing spectral and time series analyses of a number of straylight observations of GX 17+2; a Z-track, Neutron Star, LMXB source. The data are reduced using code written by Dr. Grefenstette and others for the specific purpose of analyzing straylight observations. I then use typical relxillNS models and a Markov-Chain Monte Carlo method to model the data, just as one would do with direct-light observations of the same source.

## Interests
I am generally interested in the intersection of observational and computational astrophysics. Along with having taken many classes with research-based components and having gone observing on several observing runs, I have taken Computer Science coursework well beyond what is required for my undergraduate degree, and consistently apply the skills learned in those classes to my research.

Specific research interests include (but are not limited to):

* Stellar Evolution Modeling
    * Pop II stars
    * Milky-way globular cluster systems
        * Main-sequence fitting and assorted numerical analyses
    * Search for Pop III stars and stellar remnants
    
* High-energy Stellar Systems
    * X-ray Binary systems
        * Modelling reflection features in Xspec
        * NuSTAR observations
        * Analysis of serendipidous straylight observations
