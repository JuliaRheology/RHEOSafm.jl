using Revise
using RHEOSafm
using RHEOS
using PyPlot

input_file = joinpath(@__DIR__, "testdata", "AFM_contact_test.txt")
data = importJPK(input_file, AFM(150e-9), sections = ["extend"]);
data_contact = contact_point(data, AFM(150e-9), "hertz", (R = 150e-9,));
