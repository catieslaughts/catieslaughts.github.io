---
layout: mrp_post
title: Orbit Animations from kep3d output
tags: kepler3 animation 3d 2d orbital
---

This week, I've been focused on writing code that an animate the outputs from the kep3d function, as well as (to the best of my ability) establishing the infrastructure I'll need to use this code in more general cases.

I figured the first step in maintaining the generalizability of this code was to keep everything in functions. Additionally, in order to avoid having to run and re-run the kep3d code, I've set things up so data can be saved to and read in from files, instead of directly in the code.

As such, I began by throwing together a function to write the output of the kep3d function to a .csv file, and an associated read function which reads in these files. The docstrings are as follows:

<pre><code>save_kep3d(X, Y, Xs, Ys, Zs, Xv, Yv, Zv, overwrite = False, filepath = './data/', filename = 'data.csv'):
	'''saves the outputs of kep3d into a basic csv with one line header, added by Catherine Oct 12, 2022
	
	Args:
		X: same as kep3d return
		Y: same as kep3d return
		Xs: same as kep3d return
		Ys: same as kep3d return
		Zs: same as kep3d return
		Xv: same as kep3d return
		Yv: same as kep3d return
		Zv: same as kep3d return
		overwrite: boolean prevents previous data from being overwritten if False, optional
		filepath: string, path to where data should be saved, optional, defaults to pwd
		filename: string, file name with .csv extension, optional, defaults to "data"
		
	Returns: none
	'''
</code></pre>

<pre><code> '''reads in the kep3d data from a csv as saved by the function save_kep3d
	
	Args:
		filepath: string, path to where data should be saved, optional, defaults to pwd
		filename: string, file name with .csv extension, optional, defaults to "data"
		
	Returns:
		X: same as kep3d return
		Y: same as kep3d return
		Xs: same as kep3d return
		Ys: same as kep3d return
		Zs: same as kep3d return
		Xv: same as kep3d return
		Yv: same as kep3d return
		Zv: same as kep3d return
	'''
  </code></pre>
  
  While admittedly a little overkill, the thought is that writing these into functions now will probably end up saving me time on the backend. I do not currently include t_orbit in the variables to be saved, but, if needed, doing so should be straightforward (here's hoping my code doesn't hear me say that)
  
  Once those were written, I got started on a function to animate a 2D orbit fromt the kep3d output. While not the ultimate goal, I have done 2d animation before and was figured it would be best to debug the animation stuff in 2d, in hindsight, this was a good choice.
  
  I began by coding it so a single filename could be passed through and read in. A marker is placed at 0,0 and the full orbit is drawn for reference. The code currently plots the projection on the sky, but changing it or adding a new function to plot the orbital plane would be straightforward.
  <br><img src="/images_pdfs/mrp_ims/animations/2Danimation_1.gif" width="60%">
  
  From here, I created a second data set with kep3d, changing the eccentricity of the orbit slightly so I could see it. I edited the code so the function recieved a list of file names.
  <br><img src="/images_pdfs/mrp_ims/animations/2Danimation_2.gif" width="60%">
  
  In principle, however, I assumed I want this code to be able to plot an arbitrary number of points with different orbits, so that it can be easily expanded as we increase the complexity of our simulation. This took some effort. In particular, initializing an arbitrary number of Line2D objects was difficult, but with numpy arrays, I eventually found a solution. Playing around with some matplotlib settings to make it look nice, I created the following:
  <br><img src="/images_pdfs/mrp_ims/animations/2Danimation_3.gif" width="60%">
  
  After which, it was surprisingly trivial to adapt my 2d animation code to three dimensions. The only real issue I ran into was that the function to update the z-axis data in the animate function is slightly different. But a quick google search helped me fix it quickly.
  
  <br><img src="/images_pdfs/mrp_ims/animations/3Danimation_3.gif" width="60%">
  
  
  
  
  
  
