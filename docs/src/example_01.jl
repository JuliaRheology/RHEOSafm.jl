# # Example 01 

# This script provides an example of fitting of a relaxation experiment. 
# First import the packages.

using RHEOSafm
using RHEOS

using Plots

# Next, the output file provided by the JPK software is imported. The file contains the time-force-displacement values and they are automatically converted into time-stress-strain. 
# The function [`importJPK`](@ref) requires the file path, the radious of the indenter, and the segments of the curve to upload (i.g. extend, pause, retract).
input_file = joinpath(@__DIR__, "assets", "AFM_relaxation.txt")
R = 150e-9; # Radious of the indenter
interface = AFM(R);
data = importJPK(input_file, interface, sections = ["extend", "pause"]);

#md # !!! note "Beware!"
#md #     Currently RHEOSafm makes use of the Hertz contact model to convert force-displacement to stress-strain. Additional tip geometries will be added in next updates. 

plot(data.t, data.σ, legend = false, xlabel = "Time", ylabel = "Stress")

# To detect the point at which approximately contact occurs in RHEOSafm it is possible to: 
# 1) apply a force threshold
# 2) apply Hertz spherical contact model
# In this example the "threshold" method is used. An application of the Hertz method is availabel in example 02. 
data_contact = contact_point(data, interface, "threshold", (threshold = 1e-8,));
d_downsample = resample(data_contact, -10)

plot(data_contact.t, data_contact.σ, legend = false, xlabel = "Time", ylabel = "Stress")


SLS_model = modelstepfit(d_downsample, FractSLS_Zener, strain_imposed)
SLS_predict = extract(data_contact, strain_only)
# and calculate the stress based on the model
SLS_predict = modelpredict(SLS_predict, SLS_model)
# Now we can plot data and model together for comparison

plot(data_contact.t, data_contact.σ, legend = false, xlabel = "Time", ylabel = "Stress")
plot!(SLS_predict.t, SLS_predict.σ, legend = false, xlabel = "Time", ylabel = "Stress")

