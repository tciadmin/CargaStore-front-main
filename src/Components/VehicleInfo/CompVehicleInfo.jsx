import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { postUser } from "../../Redux/Actions/UserActions/userActions";
import { axiosInstance } from "../../Redux/axiosInstance";
//? --------------------------------------------- MUI
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { useMediaQuery, Select, MenuItem } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

//? --------------------------------------------- STYLES
import { Colors } from "../../Utils/Colors";
import { driverFormData } from "../../Redux/Actions/formActions";
import { useDispatch, useSelector } from "react-redux";

export default function CompVehicleInfo() {
  const mobile = useMediaQuery("(max-width:720px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selectChargeType = ["Seca", "Peligrosa", "Refrigerada"];
  const { driverData } = useSelector((state) => state.forms);
  const { userLoading } = useSelector((state) => state.user);
  const { brand, model, year, charge_capacity, charge_type } = driverData;

  const vehicleTypes = [
    'Camión',
    'Camioneta',
    'Tráiler',
    'Plataforma',
    'Furgón',
    'Refrigerado',
    'Volqueta',
    'Cisterna',
    'Porta vehículos',
    'Góndola',
    'Cama baja',
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      brand: "",
      model: "",
      vehicle_type: "",
      year: "",
      charge_capacity: "",
      charge_type: "",
      hasGps: false,
    },
  });
  
  const watchedModel = watch("model");

  const [brands, setBrands] = React.useState([]);
  const [models, setModels] = React.useState([]);
  const [selectedBrand, setSelectedBrand] = React.useState("");  // Marca seleccionada

  React.useEffect(() => {
    // Obtener marcas de vehículos
    const fetchBrands = async () => {
      try {
        const response = await axiosInstance.get("/truck/vehicle/brands");
 
        // Asegúrate de que la respuesta sea un arreglo
        if (Array.isArray(response.data)) {
          setBrands(response.data);
        } else {
          console.error("La respuesta de marcas no es un arreglo", response.data);
        }
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };
  
    fetchBrands();
  }, []);
  

  // Obtener modelos cuando se selecciona una marca
  React.useEffect(() => {
    if (selectedBrand) {
      const fetchModels = async () => {
        try {
          const response = await axiosInstance.get(`/truck/vehicle/models?brand=${selectedBrand}`);
          
          // Asegúrate de que la respuesta sea un arreglo
          if (Array.isArray(response.data)) {
            setModels(response.data);
          } else {
            console.error("La respuesta de modelos no es un arreglo", response.data);
          }
        } catch (error) {
          console.error("Error fetching models:", error);
        }
      };
      fetchModels();
    }
  }, [selectedBrand]);
  

  React.useEffect(() => {
    setValue("brand", brand);
    setValue("model", model);
    setValue("year", year);
    setValue("charge_capacity", charge_capacity);
    setValue("charge_type", charge_type);
  }, [brand, model, year, charge_capacity, charge_type, setValue]);

  const onSubmit = (data) => {
    dispatch(driverFormData(data));
    dispatch(postUser("driver", { ...driverData, ...data }, navigate));
  };

  return (
    <Box className="registerContainer">
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          minHeight: "100vh",
          justifyContent: "center",
          overflowY: "auto",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            border: mobile ? "none" : "1px solid rgb(102, 113, 133, 0.3)",
            borderRadius: "8px",
            gap: 10,
            justifyContent: "center",
            marginBottom: "20px", // Espacio debajo del encabezado
          }}
        >
          <h1 style={{ fontSize: "1.5rem" }}> Información del vehículo </h1>

          <form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* //? --------------------------------------------- BRAND */}
            <span style={{ display: "flex", width: "100%" }}>
              Marca<p style={{ color: "red" }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <InputLabel>Marca</InputLabel>
              <Select
                {...register("brand", { required: true })}
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                label="Marca"
                style={{
                  borderRadius: "8px",
                  height: "40px",
                  width: 400,
                }}
              >
                {brands.map((brand) => (
                  <MenuItem key={brand} value={brand}>
                    {brand}
                  </MenuItem>
                ))}
              </Select>
              {errors.brand && (
                <p style={{ color: "red" }}>Este campo es requerido</p>
              )}
            </FormControl>
            {/* //? --------------------------------------------- MODEL */}
            <span style={{ display: "flex", width: "100%" }}>
              Modelo<p style={{ color: "red" }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
            <InputLabel>Modelo</InputLabel>
            <Select
              {...register("model", { required: true })}
              value={watchedModel}
              onChange={(e) => {
                setValue("model", e.target.value);
              }}
              label="Modelo"
              style={{
                borderRadius: "8px",
                height: "40px",
                width: 400,
              }}
            >
              {models.map((model) => (
                <MenuItem key={model} value={model}>
                  {model}
                </MenuItem>
              ))}
            </Select>
            {errors.model && (
              <p style={{ color: "red" }}>Este campo es requerido</p>
            )}
          </FormControl>
            {/* //? --------------------------------------------- VEHICLE TYPE */}
            <span style={{ display: "flex", width: "100%" }}>
              Tipo de vehículo<p style={{ color: "red" }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <InputLabel id="vehicle-type-label">Tipo de vehículo</InputLabel>
              <Select
                {...register("vehicle_type", { required: true })}
                labelId="vehicle-type-label"
                id="vehicle-type"
                label="Tipo de vehículo"
                style={{
                  height: mobile ? "40px" : "40px",
                  borderRadius: "8px",
                  width: 400,
                }}
              >
                {vehicleTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
              {errors.vehicle_type && (
                <p style={{ color: "red" }}>Este campo es requerido</p>
              )}
            </FormControl>
            {/* //? --------------------------------------------- YEAR */}
            <span style={{ display: "flex", width: "100%" }}>
              Año del camión<p style={{ color: "red" }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                {...register("year", { required: true })}
                placeholder="2020"
                style={{
                  borderRadius: "8px",
                  height: "40px",
                  width: 400,
                }}
              />
              {errors.year && (
                <p style={{ color: "red" }}>Este campo es requerido</p>
              )}
            </FormControl>
            {/* //? --------------------------------------------- LOAD CAPACITY */}
            <span style={{ display: "flex", width: "100%" }}>
              Capacidad de carga<p style={{ color: "red" }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                {...register("charge_capacity", { required: true })}
                placeholder="2 toneladas"
                style={{
                  borderRadius: "8px",
                  height: "40px",
                  width: 400,
                }}
              />
              {errors.charge_capacity && (
                <p style={{ color: "red" }}>Este campo es requerido</p>
              )}
            </FormControl>
            {/* //? --------------------------------------------- LOAD TYPE*/}
            <span style={{ display: "flex", width: "100%" }}>
              Tipo de unidad de carga
              <p style={{ color: "red" }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <Select
                {...register("charge_type", {
                  required: {
                    value: true,
                    message: "Este campo es requerido",
                  },
                })}
                style={{
                  height: mobile ? "40px" : "40px",
                  borderRadius: "8px",
                  width: 400,
                }}
              >
                {selectChargeType.map((type, index) => (
                  <MenuItem key={index} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
              {errors.type && (
                <p style={{ color: "red" }}>{errors.type.message}</p>
              )}
            </FormControl>
            {/* //? --------------------------------------------- GPS */}
            <span style={{ display: "flex", width: "100%" }}>
              ¿Cuenta con GPS? <p style={{ color: "red" }}>*</p>
            </span>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <InputLabel>¿Cuenta con GPS?</InputLabel>
              <RadioGroup row {...register("hasGps", { required: true })}>
                <FormControlLabel value={true} control={<Radio />} label="Sí" />
                <FormControlLabel value={false} control={<Radio />} label="No" />
              </RadioGroup>
              {errors.hasGps && (
                <p style={{ color: "red" }}>Este campo es requerido</p>
              )}
            </FormControl>

            <Button
              variant="contained"
              disabled={userLoading}
              sx={{
                m: 1,
                height: "40px",
                width: 400,
              }}
              style={{
                color: Colors.primary.contrastText,
                backgroundColor: Colors.primary.main,
                borderRadius: "8px",
              }}
              type="submit"
            >
              {userLoading ? "Cargando" : "Registrarse"}
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
