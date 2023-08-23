import React from "react";
import Image from "next/image";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { panelModels } from "../../Products/PanelOrnamental";

export default function PanelOrnamental({ handleAddProduct, handleModifyProduct, modifying, t }) {
	return (
		<form onSubmit={modifying ? handleModifyProduct : handleAddProduct} className="space-y-4">
			<input type="text" name="Produs" value="Panel Ornamental" className="hidden" readOnly />

			{/* Width & height */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
				<FormControl>
					<InputLabel htmlFor="latime">{t("Latime")}</InputLabel>
					<Input
						id="latime"
						name="Latime"
						type="number"
						variant="standard"
						endAdornment={<InputAdornment position="end">mm</InputAdornment>}
						fullWidth
						required
					/>
				</FormControl>
				<FormControl>
					<InputLabel htmlFor="inaltime">{t("Inaltime")}</InputLabel>
					<Input
						id="inaltime"
						name="Inaltime"
						type="number"
						variant="standard"
						endAdornment={<InputAdornment position="end">mm</InputAdornment>}
						fullWidth
						required
					/>
				</FormControl>
			</div>

			<FormControl fullWidth>
				<InputLabel id="modelname-select-label">Model</InputLabel>
				<Select
					name="Model"
					id="modelname-select"
					labelId="modelname-select-label"
					MenuProps={{ disableScrollLock: true }}
					variant="standard"
				>
					{panelModels.map((e, i) => (
						<MenuItem value={e.name} key={i}>
							<div className="flex items-center space-x-2">
								<div className="relative h-32 w-20">
									<Image src={e.source} alt={e.name} layout="fill" objectFit="contain" />
								</div>
								<div>{e.name}</div>
							</div>
						</MenuItem>
					))}
				</Select>
			</FormControl>

			<TextField name="Cantitate" label={t("Cantitate")} type="number" variant="standard" fullWidth required />

			<TextField name="Mesaj" label={t("Mesaj")} variant="standard" rows={5} multiline fullWidth />
			{modifying ? (
				<button className="theme-button2 block w-fit mx-auto" type="submit">
					{t("modifica")}
				</button>
			) : (
				<button className="theme-button2 block w-fit mx-auto" type="submit">
					{t("adauga")}
				</button>
			)}
		</form>
	);
}
