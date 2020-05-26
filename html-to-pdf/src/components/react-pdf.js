import React from 'react';
import '../App.css';
import { Page, Text, View, Document, StyleSheet, Font, Image } from '@react-pdf/renderer';

const PdfTest = () => (
	<Document>
		<Page style={styles.body}>
			<Text style={styles.headerDate}>30/04/2020</Text>
			<Text
				style={styles.headerPage}
				render={({ pageNumber, totalPages }) => `Página ${pageNumber} de ${totalPages}`}
				fixed
			/>
			<Text style={styles.budgetIdTitle}>Presupuesto #000</Text>
			<Text style={styles.text}>Para cualquier información contacte con: </Text>
			<View style={styles.table}>
				<View style={styles.tableRow}>
					<View style={styles.tableCol}>
						<Text style={styles.contactTitle}>[Nombre del punto de venta]</Text>
						<Text style={styles.contactInfo}>[Dirección del Punto de Venta]</Text>
						<Text style={styles.contactInfo}>Teléfono: [Teléfono del Punto de Venta]</Text>
						<Text style={styles.contactInfo}>[Email del Punto de Venta]</Text>
						<Text style={styles.contactInfo}>Horario de contacto: [Horario del Punto de Venta]</Text>
					</View>
					<View style={styles.tableCol}>
						<Text style={styles.contactTitle}>Cliente</Text>
						<Text style={styles.contactInfo}>[NIF] - [Nombre del cliente del presupuesto]</Text>
						<Text style={styles.contactInfo}>Teléfono: [teléfono del cliente del presupuesto]</Text>
						<Text style={styles.contactInfo}>Email: [email del cliente del presupuesto]</Text>
					</View>
				</View>
				<View style={styles.tableRow}>
					<View style={styles.tableCol} />
					<View style={styles.tableCol} />
				</View>
			</View>
			<Text style={styles.budgetTitle}>Presupuesto Racc Moto</Text>
			<View style={styles.imgTable}>
				<View style={styles.tableRow}>
					<View style={styles.tableCol}>
						<Image
							cache={false}
							source={{
								uri: 'https://react-pdf.org/static/images/logo.png',
								method: 'GET',
								headers: { crossorigin: "anonymous"},
								body: ''
							}}
							style={{ width: 200, height: 200 }}
						/>
					</View>
					<View style={styles.tableCol}>
						<Text style={styles.budgetInfo}>
							{' '}
							<Text style={styles.boldText}>Duración:</Text> [Duración producto]
						</Text>
						<Text style={styles.budgetInfo}>
							{' '}
							<Text style={styles.boldText}>Fecha Efecto:</Text> [Fecha efecto tarificación]
						</Text>
					</View>
				</View>
			</View>
			<Text style={styles.subtitle}>Garantías Incluidas</Text>
			<View style={styles.table}>
				<View style={styles.tableRow}>
					<View style={styles.tableColWarrantiesName}>
						<Text style={styles.warrantiesName}>Asistencia jurídica</Text>
						<Text style={styles.warrantiesName}>Médico de guardia</Text>
						<Text style={styles.warrantiesName}>Recursos de multas</Text>
						<Text style={styles.warrantiesName}>Asistencia bicicleta</Text>
						<Text style={styles.warrantiesName}>Responsabilidad civil Bici</Text>
						<Text style={styles.warrantiesName}>Asistencia al vehículo</Text>
						<Text style={styles.warrantiesName}>Vehículo sustitución</Text>
						<Text style={styles.warrantiesName}>Asistencia personal en viaje</Text>
						<Text style={styles.warrantiesName}>Asistencia sanitaria</Text>
					</View>
					<View style={styles.tableColWarrantiesInfo}>
						<Text style={styles.warrantiesInfo}>Incluida</Text>
						<Text style={styles.warrantiesInfo}>Incluido</Text>
						<Text style={styles.warrantiesInfo}>Incluido</Text>
						<Text style={styles.warrantiesInfo}>España y Andorra</Text>
						<Text style={styles.warrantiesInfo}>30.000€</Text>
						<Text style={styles.warrantiesInfo}>España y Andorra</Text>
						<Text style={styles.warrantiesInfo}>Vehículo sustitución 3 días Moto</Text>
						<Text style={styles.warrantiesInfo}>Incluido</Text>
						<Text style={styles.warrantiesInfo}>Incluido</Text>
					</View>
				</View>
			</View>
			<Text style={styles.warrantiesDetail}>
				*El detalle de coberturas, limitaciones y exclusiones serán las que figuren en el documento de
				Prestaciones vigente ([link al detalle de prestaciones del producto contratado]).
			</Text>
			<Text style={styles.subtitle}>Opciones Adicionales</Text>
			<Text style={styles.modules}>Módulo Seguridad 15€</Text>
			<Text style={styles.modules}>Módulo Coche Sustitución RM 15€</Text>
			<Text style={styles.subtitle}>Número asegurados: 1</Text>
			<Text style={styles.subtitle}>Oferta</Text>
			<Text style={styles.priceText}>
				Prima anual total: <Text style={styles.boldText}>104€</Text>
			</Text>
			<Text style={styles.warrantiesDetail}>(IVA incluido))</Text>
			<Text
				style={styles.pageNumber}
				render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
				fixed
			/>
		</Page>
	</Document>
);

const styles = StyleSheet.create({
	body: {
		paddingTop: 35,
		paddingBottom: 65,
		paddingHorizontal: 75
	},

	headerDate: {
		fontSize: 10,
		textAlign: 'right',
		fontFamily: 'Helvetica-Bold'
	},
	headerPage: {
		fontSize: 10,
		textAlign: 'right',
		fontFamily: 'Helvetica'
	},

	budgetIdTitle: {
		margin: 8,
		marginLeft: 0,
		fontSize: 12,
		textAlign: 'left'
	},
	contactTitle: {
		margin: 8,
		fontSize: 9,
		textAlign: 'justify',
		fontFamily: 'Helvetica-Bold'
	},
	contactInfo: {
		fontSize: 9,
		textAlign: 'justify',
		marginLeft: 8,
		marginBottom: 4
	},

	budgetTitle: {
		margin: 8,
		marginTop: 25,
		marginLeft: 0,
		fontSize: 18,
		textAlign: 'left',
		fontFamily: 'Helvetica-Bold'
	},
	budgetInfo: {
		fontSize: 11,
		textAlign: 'justify',
		margin: 8
	},

	boldText: {
		fontFamily: 'Helvetica-Bold'
	},

	subtitle: {
		margin: 8,
		marginTop: 11,
		marginLeft: 0,
		fontSize: 14,
		fontFamily: 'Helvetica-Bold'
	},

	warrantiesName: {
		fontSize: 11,
		textAlign: 'justify',
		borderStyle: 'solid',
		borderTopWidth: 1,
		fontFamily: 'Helvetica-Bold',
		paddingLeft: 8,
		paddingTop: 1,
		paddingBottom: 1
	},
	warrantiesInfo: {
		fontSize: 11,
		textAlign: 'justify',
		borderStyle: 'solid',
		borderTopWidth: 1,
		paddingTop: 1,
		paddingBottom: 1
	},
	warrantiesDetail: {
		fontSize: 8,
		textAlign: 'justify',
		margin: 8
	},

	image: {
		width: '200',
		height: '200'
	},

	modules: {
		fontSize: 11,
		textAlign: 'justify',
		margin: 2,
		marginLeft: 30
	},

	priceText: {
		fontSize: 11,
		textAlign: 'justify',
		marginLeft: 8,
		marginTop: 10
	},

	text: {
		margin: 8,
		fontSize: 9,
		textAlign: 'justify'
	},
	info: {
		fontSize: 10,
		textAlign: 'justify',
		marginLeft: 8
	},

	table: {
		display: 'table',
		width: 'auto',
		borderStyle: 'solid',
		borderWidth: 1
	},

	imgTable: {
		borderStyle: 'solid',
		borderWidth: 1
	},

	tableRow: {
		margin: 'auto',
		flexDirection: 'row'
	},
	tableCol: {
		width: '50%'
	},
	tableColWarrantiesName: {
		width: '40%'
	},
	tableColWarrantiesInfo: {
		width: '60%'
	},
	tableCell: {
		margin: 'auto',
		marginTop: 2,
		fontSize: 10
	},
	pageNumber: {
		position: 'absolute',
		fontSize: 12,
		bottom: 30,
		left: 0,
		right: 0,
		textAlign: 'center',
		color: 'grey'
	}
});

export default PdfTest;
