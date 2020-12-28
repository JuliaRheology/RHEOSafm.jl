# # Example 01 

# This script provides an example of fitting of a relaxation experiment. 
# First import the packages.

using RHEOSafm
using RHEOS

using Plots

# Next, the output file provided by the JPK software is imported. The file contains the time-force-displacement values and they are automatically converted into time-stress-strain. 
# The function [`importJPK`](@ref) requires the file path, the radious of the indenter, and the segments of the curve to upload (i.g. extend, pause, retract).
input_file = joinpath(@__DIR__, "assets", "AFM_relaxation.txt")
interface = AFM(150e-9);
data = importJPK(input_file, interface, sections = ["extend", "pause"]);

#md # !!! note "Beware!"
#md #     Currently RHEOSafm makes use of the Hertz contact model to convert force-displacement to stress-strain. Additional tip geometries will be added in next updates. 

plot(data.t, data.σ, legend = false, xlabel = "Time", ylabel = "Stress")

# Detect contact point
data_contact = contact_point(data, AFM(150e-9), "hertz", (R = 150e-9,));
length_contact = length(data_contact.t);

plot(data_contact.t, data_contact.σ, legend = false, xlabel = "Time", ylabel = "Stress")
