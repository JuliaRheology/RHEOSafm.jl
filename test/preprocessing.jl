println("===============================================")
println("Testing AFM_processing.jl")
println("===============================================")



function _contact_threshold_f()
    
    f = [1, 1.5, 2, 2.5, 3];
    d = [2.0, 4, 6, 8, 10];
    index = RHEOSafm.contact_threshold(f, d, (threshold = 2,))

    index == 3
end

@test _contact_threshold_f()

function _contact_hertz_f()
    # d = collect(0:0.1:10);
    # R = 1e-3
    # E = 10

    # F = 4/3 *E *R^0.5 .*d.^1.5;
    # d = collect(0:0.1:10.5)
    # F = vcat(zeros(5),F)
    # index = RHEOSafm.contact_hertz(F,d, (R = R,))
    input_file = joinpath(@__DIR__, "testdata", "AFM_contact_test.txt")
    data = importJPK(input_file, AFM(150e-9), sections = ["extend"]);
    data_contact = contact_point(data, AFM(150e-9), "hertz", (R = 150e-9, s = 0.5));
    length_contact = length(data_contact.t);

    length_contact == 127
end

@test _contact_hertz_f()