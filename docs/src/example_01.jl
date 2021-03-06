# # Example 01: Relaxation experiment

# This script provides an example of fitting of a relaxation experiment. 
# First import the packages.

using RHEOSafm
using RHEOS

using Plots
using Plots.PlotMeasures
gr();

# Next, the output file provided by the JPK software is imported. The file contains the time-force-displacement values and they are automatically converted into time-stress-strain. 
# The function [`importJPK`](@ref) requires the file path, the radious of the indenter, and the segments of the curve to upload (i.g. extend, pause, retract).
input_file = joinpath(@__DIR__, "assets", "AFM_relaxation.txt")
R = 150e-9; # Radious of the indenter
interface = AFM(R);
data = importJPK(input_file, interface, sections = ["extend", "pause"]);

#md # !!! note "Beware!"
#md #     Currently RHEOSafm makes use of the Hertz contact model to convert force-displacement to stress-strain. Additional tip geometries will be added in next updates. 
plot(data.t, data.σ, legend = false, xlabel = "Time", ylabel = "Stress", guidefont= 10, size = (300,300), lw=3, margin=16mm)

# To detect the point at which approximately contact occurs using RHEOSafm it is possible to: 
# 1) define a force threshold
# 2) apply Hertz spherical contact model
# In this example the "threshold" method is used. An application of the Hertz method is availabel in example 02. 
data_contact = contact_point(data, interface, "threshold", (threshold = 1e-8,));

#md # !!! compat "Note"
#md #     From this point, RHEOS functionalities are used. For more information refer to [RHEOS documentation](https://juliarheology.github.io/RHEOS.jl/stable/).

# To speed up the fitting procedure, the data points are downsampled.
d_downsample = resample(data_contact, -20);
# The relaxation curve is then fitted using a Fractional Standard Linear Solid model
SLS_model = modelstepfit(d_downsample, FractSLS_Zener, strain_imposed);
# Now we can extract the strain pattern 
SLS_predict = extract(data_contact, strain_only);
# and calculate the stress based on the fitted model
SLS_predict = modelpredict(SLS_predict, SLS_model);
# Now we can plot data and model together for comparison
plot(data_contact.t, data_contact.σ, legend = true, xlabel = "Time", ylabel = "Stress", label = "Experimental data", guidefont= 10, size = (500,500), lw=3, margin=16mm)
plot!(SLS_predict.t, SLS_predict.σ, label = "Fitted",guidefont= 10, size = (400,400), lw=2)
