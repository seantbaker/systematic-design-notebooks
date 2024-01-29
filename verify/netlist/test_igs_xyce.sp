NMOS data collection testbench

* include the models provided by Murmann
.include /Users/sean/ckt_dsgn/Book-on-gm-ID-design-main/starter_kit/ee214b_hspice.sp

* device parameters
.param dut_w=36.63e-6
.param dut_l=0.180e-6
.param dut_nf=1
.param dut_m=1

* circuit
VGATE gate source dc 0.6
VDRAIN pre_drain source dc 0.6
VMEASIDS pre_drain drain dc 0
VSOURCE source 0 dc 0
MDUT drain gate source 0 nch w=dut_w l=dut_l m=dut_m

* sim controls
*.dc
.OP
.print dc FORMAT=csv V(gate) V(drain) N(MDUT:VGS) N(MDUT:VDS)
+ I(VMEASIDS) {dut_l} {dut_w} N(MDUT:VTH) N(MDUT:gm) N(MDUT:gds) 
+ N(MDUT:cgs) N(MDUT:cgd)
.end