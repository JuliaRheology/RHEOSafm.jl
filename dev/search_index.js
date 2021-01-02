var documenterSearchIndex = {"docs":
[{"location":"example_02/#","page":"Indentation experiment","title":"Indentation experiment","text":"EditURL = \"https://github.com/JuliaRheology/RHEOSafm.jl/blob/master/docs/src/example_02.jl\"","category":"page"},{"location":"example_02/#Example-02:-Indentation-experiment-1","page":"Indentation experiment","title":"Example 02: Indentation experiment","text":"","category":"section"},{"location":"example_02/#","page":"Indentation experiment","title":"Indentation experiment","text":"This script provides an example of fitting of a force-indentation curve. First import the packages.","category":"page"},{"location":"example_02/#","page":"Indentation experiment","title":"Indentation experiment","text":"using RHEOSafm\nusing RHEOS\n\n\nusing Plots\ngr()","category":"page"},{"location":"example_02/#","page":"Indentation experiment","title":"Indentation experiment","text":"next import the .txt file obtained from the JPK software","category":"page"},{"location":"example_02/#","page":"Indentation experiment","title":"Indentation experiment","text":"input_file = joinpath(@__DIR__, \"assets\", \"AFM_contact_test.txt\")\nR = 150e-9; # Radious of the indenter\ninterface = AFM(R);\ndata = importJPK(input_file, interface, sections = [\"extend\"]);\nnothing #hide","category":"page"},{"location":"example_02/#","page":"Indentation experiment","title":"Indentation experiment","text":"note: Beware!\nCurrently RHEOSafm makes use of the Hertz contact model to convert force-displacement to stress-strain. Additional tip geometries will be added in next updates.","category":"page"},{"location":"example_02/#","page":"Indentation experiment","title":"Indentation experiment","text":"plot(data.ϵ, data.σ, legend = false, xlabel = \"Strain\", ylabel = \"Stress\", guidefont= 10, size = (300,300), label = \"Original data\", lw=3)","category":"page"},{"location":"example_02/#","page":"Indentation experiment","title":"Indentation experiment","text":"To detect the point at which approximately contact occurs using RHEOSafm it is possible to:","category":"page"},{"location":"example_02/#","page":"Indentation experiment","title":"Indentation experiment","text":"define a force threshold\napply Hertz spherical contact model","category":"page"},{"location":"example_02/#","page":"Indentation experiment","title":"Indentation experiment","text":"In this example the \"hertz\" method is used. Two parameters are provided: the radious of the indenter and the segment of the curve used to estimate the contact point (number between 0 and 1). An application of the thrshold method is availabel in example 01.","category":"page"},{"location":"example_02/#","page":"Indentation experiment","title":"Indentation experiment","text":"data_contact = contact_point(data, interface, \"hertz\", (R = R, s = 0.5));\nplot(data_contact.ϵ, data_contact.σ, legend = false, xlabel = \"Strain\", ylabel = \"Stress\", guidefont= 10, size = (300,300), label = \"Shifted data\", lw=3)","category":"page"},{"location":"example_02/#","page":"Indentation experiment","title":"Indentation experiment","text":"compat: Note\nFrom this point, RHEOS functionalities are used. For more information refer to RHEOS documentation.","category":"page"},{"location":"example_02/#","page":"Indentation experiment","title":"Indentation experiment","text":"The indentation curve is then fitted using a Standard Linear Solid model","category":"page"},{"location":"example_02/#","page":"Indentation experiment","title":"Indentation experiment","text":"SLS_model = modelfit(data_contact,SLS_Zener, strain_imposed);\nnothing #hide","category":"page"},{"location":"example_02/#","page":"Indentation experiment","title":"Indentation experiment","text":"Now we can extract the strain pattern","category":"page"},{"location":"example_02/#","page":"Indentation experiment","title":"Indentation experiment","text":"SLS_predict = extract(data_contact, strain_only);\nnothing #hide","category":"page"},{"location":"example_02/#","page":"Indentation experiment","title":"Indentation experiment","text":"and calculate the stress based on the fitted model","category":"page"},{"location":"example_02/#","page":"Indentation experiment","title":"Indentation experiment","text":"SLS_predict = modelpredict(SLS_predict, SLS_model);\nnothing #hide","category":"page"},{"location":"example_02/#","page":"Indentation experiment","title":"Indentation experiment","text":"Now we can plot data and model together for comparison","category":"page"},{"location":"example_02/#","page":"Indentation experiment","title":"Indentation experiment","text":"plot(data_contact.ϵ, data_contact.σ, legend = true, xlabel = \"Stress\", ylabel = \"Stress\", label = \"Experimental data\", guidefont= 10, size = (500,500), lw=3)\nplot!(SLS_predict.ϵ, SLS_predict.σ, label = \"Fitted\",guidefont= 10, size = (400,400), lw=2)","category":"page"},{"location":"example_02/#","page":"Indentation experiment","title":"Indentation experiment","text":"","category":"page"},{"location":"example_02/#","page":"Indentation experiment","title":"Indentation experiment","text":"This page was generated using Literate.jl.","category":"page"},{"location":"example_01/#","page":"Relaxation experiment","title":"Relaxation experiment","text":"EditURL = \"https://github.com/JuliaRheology/RHEOSafm.jl/blob/master/docs/src/example_01.jl\"","category":"page"},{"location":"example_01/#Example-01:-Relaxation-experiment-1","page":"Relaxation experiment","title":"Example 01: Relaxation experiment","text":"","category":"section"},{"location":"example_01/#","page":"Relaxation experiment","title":"Relaxation experiment","text":"This script provides an example of fitting of a relaxation experiment. First import the packages.","category":"page"},{"location":"example_01/#","page":"Relaxation experiment","title":"Relaxation experiment","text":"using RHEOSafm\nusing RHEOS\n\nusing Plots\ngr()","category":"page"},{"location":"example_01/#","page":"Relaxation experiment","title":"Relaxation experiment","text":"Next, the output file provided by the JPK software is imported. The file contains the time-force-displacement values and they are automatically converted into time-stress-strain. The function importJPK requires the file path, the radious of the indenter, and the segments of the curve to upload (i.g. extend, pause, retract).","category":"page"},{"location":"example_01/#","page":"Relaxation experiment","title":"Relaxation experiment","text":"input_file = joinpath(@__DIR__, \"assets\", \"AFM_relaxation.txt\")\nR = 150e-9; # Radious of the indenter\ninterface = AFM(R);\ndata = importJPK(input_file, interface, sections = [\"extend\", \"pause\"]);\nnothing #hide","category":"page"},{"location":"example_01/#","page":"Relaxation experiment","title":"Relaxation experiment","text":"note: Beware!\nCurrently RHEOSafm makes use of the Hertz contact model to convert force-displacement to stress-strain. Additional tip geometries will be added in next updates.","category":"page"},{"location":"example_01/#","page":"Relaxation experiment","title":"Relaxation experiment","text":"plot(data.t, data.σ, legend = false, xlabel = \"Time\", ylabel = \"Stress\", guidefont= 10, size = (300,300), lw=3)","category":"page"},{"location":"example_01/#","page":"Relaxation experiment","title":"Relaxation experiment","text":"To detect the point at which approximately contact occurs using RHEOSafm it is possible to:","category":"page"},{"location":"example_01/#","page":"Relaxation experiment","title":"Relaxation experiment","text":"define a force threshold\napply Hertz spherical contact model","category":"page"},{"location":"example_01/#","page":"Relaxation experiment","title":"Relaxation experiment","text":"In this example the \"threshold\" method is used. An application of the Hertz method is availabel in example 02.","category":"page"},{"location":"example_01/#","page":"Relaxation experiment","title":"Relaxation experiment","text":"data_contact = contact_point(data, interface, \"threshold\", (threshold = 1e-8,));\nnothing #hide","category":"page"},{"location":"example_01/#","page":"Relaxation experiment","title":"Relaxation experiment","text":"compat: Note\nFrom this point, RHEOS functionalities are used. For more information refer to RHEOS documentation.","category":"page"},{"location":"example_01/#","page":"Relaxation experiment","title":"Relaxation experiment","text":"To speed up the fitting procedure, the data points are downsampled.","category":"page"},{"location":"example_01/#","page":"Relaxation experiment","title":"Relaxation experiment","text":"d_downsample = resample(data_contact, -20);\nnothing #hide","category":"page"},{"location":"example_01/#","page":"Relaxation experiment","title":"Relaxation experiment","text":"The relaxation curve is then fitted using a Fractional Standard Linear Solid model","category":"page"},{"location":"example_01/#","page":"Relaxation experiment","title":"Relaxation experiment","text":"SLS_model = modelstepfit(d_downsample, FractSLS_Zener, strain_imposed);\nnothing #hide","category":"page"},{"location":"example_01/#","page":"Relaxation experiment","title":"Relaxation experiment","text":"Now we can extract the strain pattern","category":"page"},{"location":"example_01/#","page":"Relaxation experiment","title":"Relaxation experiment","text":"SLS_predict = extract(data_contact, strain_only);\nnothing #hide","category":"page"},{"location":"example_01/#","page":"Relaxation experiment","title":"Relaxation experiment","text":"and calculate the stress based on the fitted model","category":"page"},{"location":"example_01/#","page":"Relaxation experiment","title":"Relaxation experiment","text":"SLS_predict = modelpredict(SLS_predict, SLS_model);\nnothing #hide","category":"page"},{"location":"example_01/#","page":"Relaxation experiment","title":"Relaxation experiment","text":"Now we can plot data and model together for comparison","category":"page"},{"location":"example_01/#","page":"Relaxation experiment","title":"Relaxation experiment","text":"plot(data_contact.t, data_contact.σ, legend = true, xlabel = \"Time\", ylabel = \"Stress\", label = \"Experimental data\", guidefont= 10, size = (500,500), lw=3)\nplot!(SLS_predict.t, SLS_predict.σ, label = \"Fitted\",guidefont= 10, size = (400,400), lw=2)","category":"page"},{"location":"example_01/#","page":"Relaxation experiment","title":"Relaxation experiment","text":"","category":"page"},{"location":"example_01/#","page":"Relaxation experiment","title":"Relaxation experiment","text":"This page was generated using Literate.jl.","category":"page"},{"location":"#RHEOSafm-RHEology-Open-Source,-Atomic-Force-Microscopy-1","page":"Home","title":"RHEOSafm - RHEology Open Source, Atomic Force Microscopy","text":"","category":"section"},{"location":"#Summary-1","page":"Home","title":"Summary","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"RHEOSafm is an extension of the software package written in the Julia programming language RHEOS that provides tools for importing and preprocessing rheological data collected using Atomic Force Microscopy (AFM).","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Atomic Force Microscopy (AFM) is a widely experimental technique used by scientist and engineers to study the local mechanical response of materials. The key AFM component is a nanoscale tip attached to a cantilever that is indented within the material. The deflection of the cantilever is read via a laser directly pointed towards the indenting end of the cantilever. By knowing the spring constant of the cantilever and the deflection of the laser, the force applied to the sample can be calculated. ","category":"page"},{"location":"#","page":"Home","title":"Home","text":"There are different modes of operation in which an AFM can be used. The easiest way is to indent the probe at constant rate within the sample with a given force while recording the tip deflection. Another common class of tests are known as viscoelastic measurements: the cantilever is indented within the sample at a given force, and the force or the measured displacement is kept constant for a given time (i.e. creep and relaxation tests). The recorded time-force-displacement values allow us to extract the mechanical properties of the tested material. ","category":"page"},{"location":"#","page":"Home","title":"Home","text":"The determination of such unique parameters that describe a material requires two main steps:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"a contact model to convert force and displacement into stress and strain\na relationship between time-stress-strain (often referred to as constitutive model) ","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Although most of commercial AFM software programs provide a wide variety of processing tools to extract material parameters, those are limited to approximation of an elastic material, thus allowing the user to only extract the Young's modulus. Here we provide a preprocessing interface to transform time-force-displacement values into time-stress-strain that can be directly processed within RHEOS. This interface allows the user to fit the experimental data not only with a simple elastic model, but with a wide variety of viscoelastic constitutive models (for more information refer to RHEOS models).","category":"page"},{"location":"#Features-1","page":"Home","title":"Features","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"RHEOSafm package provides the utilities to:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"build a direct interface with a widely commercially available testing set-up, RHEOSafm provides features to directly import experimental data collected using BRUKER - JPK products;\nidentify the contact point.","category":"page"},{"location":"#Documentation-1","page":"Home","title":"Documentation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"The sections in this documentation each aim to provide tutorials for the elements of RHEOSafm. For more information regarding the functionalities of RHEOS please refer to RHEOS documentation. ","category":"page"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Install Julia (latest version recommended)\nFrom interactive command-line Julia REPL, enter pkg mode by pressing ]\n(Optional) Enable desired Project.toml environment\nRun the command add RHEOS to install the main RHEOS software package\nRun the command add https://github.com/JuliaRheology/RHEOSafm.jl to install the extension RHEOSafm","category":"page"},{"location":"#Contributing-to-RHEOSafm-1","page":"Home","title":"Contributing to RHEOSafm","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"If you believe you have found any bugs or invalid behaviour in RHEOSafm, please feel free to file an issue on this repository. You can also raise an issue if you feel that any part of the documentation needs clarification, or for any feature requests. Even better than just raising an issue, you could both raise an issue and issue a pull request which fixes that issue. Please be aware that RHEOSafm is released with a Contributor Code of Conduct and by participating in this project you agree to abide by its terms.","category":"page"},{"location":"#Citation-1","page":"Home","title":"Citation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"If you use RHEOSafm in your work, please consider citing the following papers as appropriate:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"J. L. Kaplan, A. Bonfanti, A. J. Kabla (2019). RHEOS.jl – A Julia Package for Rheology Data Analysis. Journal of Open Source Software, 4(41), 1700, https://doi.org/10.21105/joss.01700\nA. Bonfanti, J. L. Kaplan, G. Charras, A. J. Kabla (2020). Fractional viscoelastic models for power-law materials. Soft Matter, 16, 6002-6020, https://doi.org/10.1039/D0SM00354A","category":"page"},{"location":"API/#API-1","page":"API","title":"API","text":"","category":"section"},{"location":"API/#AFM_JPKimport-1","page":"API","title":"AFM_JPKimport","text":"","category":"section"},{"location":"API/#","page":"API","title":"API","text":"importJPK","category":"page"},{"location":"API/#RHEOSafm.importJPK","page":"API","title":"RHEOSafm.importJPK","text":"importJPK convenience function for loading in JPK AFM data into RHEOS with relevant metadata and split in to sections. Possible sections values are: extend, hold, retract.\n\n\n\n\n\n","category":"function"},{"location":"API/#AFM_preprocessing-1","page":"API","title":"AFM_preprocessing","text":"","category":"section"},{"location":"API/#","page":"API","title":"API","text":"contact_point","category":"page"},{"location":"API/#RHEOSafm.contact_point","page":"API","title":"RHEOSafm.contact_point","text":"contact_point\n\nFind approximate contact point. Current available methods (cp) are threshold' (i.e. the contact point is identified by fixing a force threshold) orhertz' (i.e. the contact point is identified by fitting a hertz model to the curve).\n\n\n\n\n\n","category":"function"}]
}
