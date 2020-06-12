using RHEOSafm
using RHEOS

interface = AFM(150e-9);
fildir = joinpath(@__DIR__, "testdata", "AFM_sampledata.txt")
data = importJPK(fildir, interface; sections = ["extend"])

print(data)