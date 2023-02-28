---
layout: mrp_post
title: Running kepler3.py
tags: kepler3
---
(note: this post is a combination of several days spanning sep 26 - oct 5)

### Today:
Today I set up and ran the Kepler code on my computer. It seems to run correctly. 

The code, as it was given to me, throws two depriciation warnings of the same type on lines 256 and 259:

    VisibleDeprecationWarning: Creating an ndarray from ragged nested sequences (which is a list-or-tuple of lists-or-tuples-or ndarrays with different lengths or shapes) is deprecated. If you meant to do this, you must specify 'dtype=object' when creating the ndarray
    
I don't foresee this causing any issues but wanted to note just in case.

I also read through the docstrings the various functions. My thoughts and questions related to the most significant ones are listed below.

- kepler_solve:
  - The first guess for the eccentric anomaly E is the mean anomaly M. Does E = M in the case of a circular orbit?
    - edit: Yes, this is clearly the case when looking at the transcendental equation, e goes to 0 so E = M
  - the link to Terry McConnell's code in the docstring appears outdated: [http://barnyard.syr.edu/quickies/kepler.c](http://barnyard.syr.edu/quickies/kepler.c)
  - is there any particular reason the primary loop is set up as "while true"?
  - mean anomaly vs true anomaly:
    <br><img src="/images_pdfs/mrp_ims/orbit_diagrams/Mean_anomaly_diagram.png">

- euler:
  - sets up rotation matrices: cartesian basis? or spherical?
  - is there a difference between periastron and periapsis? is one just a more general term?
  - "longitude of the periastron" --> relative to what?

- kep3d:
  - broken docstring link: [http://astro.geo.tu-dresden.de/~klioner/celmech.pdf](http://astro.geo.tu-dresden.de/~klioner/celmech.pdf)
    - I would like to read this one
  - How are velocities obtained without masses? I guess those things are "encoded" into the orbital elements?


#### Running code

I ran the code basically as was (added a legend to the kepler equation plot for my reference)

Plots:

Gamma andromeda:
<br><img src="/images_pdfs/mrp_ims/kep3d_example/gamma_andromeda.png">

Wolfram reference for the kepler eq. plot:
<br><img src="/images_pdfs/mrp_ims/kep3d_example/wolfram_reference.png">

s2 about the galactic center in 2d:
<br><img src="/images_pdfs/mrp_ims/kep3d_example/s2_gc_2d.png">

and 3d:
<br><img src="/images_pdfs/mrp_ims/kep3d_example/s2_gc_3d.png">

if I'm understanding the coordinate systems of kep3d outputs correctly, the left-hand 2d plot is the projection of the orbit onto the plane of reference (the xy-plane with the line of sight coming from -z), so, aligning the 3d plot from the los should yield roughly the same thing:
<br><img src="/images_pdfs/mrp_ims/kep3d_example/s2_gc_3d_aligned.png">

Questions:
- So if I run kep3d, and plot Xs, Ys, that is in the observer reference frame, with the observer sitting far away along -Z, correct? While X, Y is in the frame where the plane of the orbit is in the X-Y plane?
  - because the primary is fixed at the origin, the only transformation to be made is via the Euler rotation
- reccomendations for a good source to touch up on the details of orbital mechanics?

### To Do:
- waiting on code from prof. jackson
  - reread appendix from paper in the mean time 
  - how do we want to deal with using fortran 77? I've had isssues with the observatory's ssh in the past, but can try again. Alternatively, I have compiled fortran 77 on a previous personal machine... we could try that, but im afraid the OS is newer on my current one
- read up about orbital mechanics 


